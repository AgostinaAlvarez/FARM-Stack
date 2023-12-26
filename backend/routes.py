from fastapi import APIRouter, Cookie, HTTPException, Depends
from database import SessionLocal

from pydantic import BaseModel
import jwt


router = APIRouter()


@router.get('/')
def getItems():
    return {"message":"bienvenido a python"}


#Login - Seccion del login

class UserLogin(BaseModel):
    email:str
    password:str

@router.post('/api/login')
def Login(user:UserLogin):
    #print(user.email)
    #print(user.password)
    #return {"message":"login"}
    try:
        db = SessionLocal()
        usuarios = db.execute(
            "SELECT * FROM users WHERE email = :email AND password = :password",
            {"email": user.email, "password": user.password}
        ).fetchall()
        #print(usuarios)
        #print('longitud')
        #print(len(usuarios))
        if(len(usuarios) == 0):
            print('login no permitido')
            
            return {"login":False}
        else:
            print('login permitido')
            #jwt = data,secret key, base codificadora
            token = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")
            print(token)
            return {"login":True,"token":token}
    except Exception as e:
        raise HTTPException(status_code=500,detail=str(e))

#Otras secciones
    
@router.get('/api/test')
def testFnc():
    token = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")
    return {"tokenn":token}

@router.get('/api/viniedos')
def getItems():
    try:
        db = SessionLocal()
        viniedos = db.execute("SELECT id, nombre, localidad, pais, provincia FROM viniedos").fetchall()
        return {"items": viniedos}
    except Exception as e:
        # Manejo de la excepción
        raise HTTPException(status_code=500, detail=str(e))




#/////////////////////////////////// CODIGO OFICIAL ////////////////////////////
    
#Verificar el JWT
def verify_token(token: str = Cookie(None)):
    try:
        if token is None:
            raise HTTPException(status_code=401, detail="Unahutorized")
        
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        # Aquí podrías hacer más validaciones si necesitas, como verificar la validez del token en una base de datos
        
        return payload  # Retorna el payload si el token es válido
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Unahutorized token")



#----------------------------LOGIN------------------
#Funcion para logearse
    
@router.get("/api/log-in/{email}/{password}")
def get_item(email: str, password: str):
    try:
        db = SessionLocal()
        usuarios = db.execute(
            "SELECT * FROM users WHERE email = :email AND password = :password",
            {"email": email, "password": password}
        ).fetchall()

        if(len(usuarios) == 0):
            # no devolvio ningun usuario
            print('login no permitido')
            return {"login":False}
        else:
            # devolvio un usuario
            print('login permitido')
            token = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")
            print(token)
            return {"login":True,"token":token}
    except Exception as e:
        raise HTTPException(status_code=500,detail=str(e))
    

#Check login
    
@router.get("/api/check-auth")
async def check_auth (payload: dict = Depends(verify_token)):
    return {"ok":True}


#----------------------HOME SCREEN DATA----------------

@router.get("/api/data-general")
async def get_tareas (payload: dict = Depends(verify_token)):
    try:
        #
        db = SessionLocal()
        territorio = db.execute("SELECT sum(superficie) as superficie FROM viniedos").fetchall()
        
        return {"territorio":territorio[0][0],"data":22}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#------------------------TAREAS--------------------


class TaskModel(BaseModel):
    id: str
    nombre_tarea: str
    descripcion: str
    fecha_creacion: str
    fecha_limite: str
    prioridad: str
    estado: str

class TaskAsociate(BaseModel):
    id_tarea: str
    id_parcela: str

class CompleteTas(BaseModel):
    id_tarea: str

#obtener las tareas
@router.get("/api/tareas")
async def get_tareas (payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        tareas = db.execute(
        '''
            SELECT 
                parcelas.nombre AS nombre_parcela,
                viniedos.nombre AS nombre_viniedo,
                viniedos.localidad AS localidad_viniedo,
                viniedos.pais AS pais_viniedo,
                viniedos.provincia AS provincia_viniedo,
                tareas.nombre_tarea AS nombre_tarea,
                tareas.descripcion AS descripcion_tarea,
                tareas.fecha_creacion AS fecha_creacion,
                tareas.fecha_limite AS fecha_limite,
                tareas.id AS id_tarea,
                tareas.estado AS estado
            FROM 
                tareasporparcela
                JOIN parcelas ON tareasporparcela.id_parcela = parcelas.id
                JOIN viniedos ON parcelas.id_viniedo = viniedos.id
                JOIN tareas ON tareasporparcela.id_tarea = tareas.id    
        '''
        ).fetchall()
        return {"tareas":tareas}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#marcar una tarea como completa una tarea 
@router.put("/api/tarea-completa")
async def complete_task (task: CompleteTas,payload: dict = Depends(verify_token)):
    try:
        with SessionLocal() as db:
            db.execute(f"UPDATE tareas SET estado = 'Completa' WHERE id = '{task.id_tarea}'")
            db.commit()  # Confirmar los cambios en la base de datos
        return {"ok": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

#Crear una nueva tarea
@router.post("/api/tarea")
async def create_task (task: TaskModel,payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        db.execute(f"INSERT INTO tareas (id, nombre_tarea, descripcion, fecha_creacion, fecha_limite, prioridad, estado) VALUES ('{task.id}','{task.nombre_tarea}','{task.descripcion}','{task.fecha_creacion}','{task.fecha_limite}','{task.prioridad}','{task.estado}')")
        db.commit()
        return {"ok":True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


#asociar una tarea a una parcela
@router.post("/api/tarea-por-parcela")
async def create_task_asociate (task: TaskAsociate,payload: dict = Depends(verify_token)):
    try:
        #print(task)
        print(task.id_tarea)
        print(task.id_parcela)
        db = SessionLocal()
        db.execute("SET FOREIGN_KEY_CHECKS = 0;")
        db.execute(f"INSERT INTO tareasporparcela (id_tarea, id_parcela) VALUES ('{task.id_tarea}','{task.id_parcela}')")
        db.execute("SET FOREIGN_KEY_CHECKS = 1;")
        db.commit()
        return {"ok":True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#---------------------VINIEDOS----------------------

#todos los viniedos
@router.get("/api/get-viniedos")
async def get_viniedos (payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        viniedos = db.execute("SELECT id, nombre, localidad, pais, provincia FROM viniedos").fetchall()
        return {"viniedos": viniedos}
    except Exception as e:
        # Manejo de la excepción
        raise HTTPException(status_code=500, detail=str(e))
    
#datos de un viniedo especifico
@router.get("/api/viniedo/{id}")
async def get_viniedo_detail (id: str,payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        viniedo = db.execute(f"SELECT nombre,superficie,localidad,pais,provincia,ST_ASText(coordenadas) AS coordenadas_polygon FROM viniedos WHERE id='{id}' LIMIT 0,1000").fetchall()
        parcelas = db.execute(f"SELECT nombre,superficie,latitud,longitud,id from parcelas where id_viniedo = '{id}'").fetchall()
        return {"datos":viniedo, "parcelas":parcelas}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


#----------------PARCELAS----------------------------
#Detalles de una parcela por su id
@router.get("/api/parcela/{id}")
async def get_parcela_detail(id: str, payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        parcela = db.execute(f"SELECT parcelas.nombre,parcelas.superficie,parcelas.latitud,parcelas.longitud,ST_ASText(parcelas.coordenadas) AS coordenadas_polygon,viniedos.nombre AS nombre_viniedo, viniedos.localidad, viniedos.provincia, viniedos.pais FROM viniedos INNER JOIN parcelas ON viniedos.id =parcelas.id_viniedo WHERE parcelas.id = '{id}' LIMIT 0,1000").fetchall()
        return {"datos":parcela}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#obtener las parcelas por el viniedo

@router.get("/api/parcela-by-viniedo/{id}")
async def get_parcelas_by_viniedo(id: str, payload: dict = Depends(verify_token)):
    try:
        db = SessionLocal()
        viniedos = db.execute(f"SELECT id, id_viniedo,nombre,superficie,latitud,longitud,ST_ASText(coordenadas) AS coordenadas_polygon FROM parcelas WHERE id_viniedo='{id}' LIMIT 0,1000").fetchall()
        return {"parcelas":viniedos}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))