"""
from databases import Database

DATABASE_URL = "mysql+mysqlconnector://root:1234pinn56@localhost:3306/bd"

database = Database(DATABASE_URL)
"""


from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root:pin420608@localhost:3306/bd"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# ... definición de modelos, si es necesario
