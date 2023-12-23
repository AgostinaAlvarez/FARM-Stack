from fastapi import APIRouter
from database import SessionLocal
from fastapi import HTTPException

router = APIRouter()


@router.get('/')
def getItems():
    return {"message":"bienvenido a python"}

@router.get('/api/viniedos')
def getItems():
    try:
        db = SessionLocal()
        viniedos = db.execute("SELECT id, nombre, localidad, pais, provincia FROM viniedos").fetchall()
        return {"items": viniedos}
    except Exception as e:
        # Manejo de la excepción
        raise HTTPException(status_code=500, detail=str(e))


