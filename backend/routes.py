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


# Función para verificar el token JWT en las cookies
def verify_token(token: str = Cookie(None)):
    try:
        if token is None:
            raise HTTPException(status_code=401, detail="Token not provided")
        
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        # Aquí podrías hacer más validaciones si necesitas, como verificar la validez del token en una base de datos
        
        return payload  # Retorna el payload si el token es válido
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.get("/api/user-info")
async def get_user_info(payload: dict = Depends(verify_token)):
    # Si se alcanza este punto, el token es válido
    # Aquí podrías hacer tu consulta a la base de datos y devolver la información del usuario
    try:
        db = SessionLocal()
        viniedos = db.execute("SELECT id, nombre, localidad, pais, provincia FROM viniedos").fetchall()
        return {"items": viniedos}
    except Exception as e:
        # Manejo de la excepción
        raise HTTPException(status_code=500, detail=str(e))


#CODIGO OFICIAL
    
#Middelware para verifical el token