from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas, crud
from .database import engine, SessionLocal

# Create DB tables on startup
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow CORS from frontend (Next.js dev server)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --------------------------------------
# Routes
# --------------------------------------

@app.get("/api/blogs", response_model=list[schemas.BlogResponse])
def read_blogs(db: Session = Depends(get_db)):
    return crud.get_blogs(db)

@app.get("/api/blogs/{blog_id}", response_model=schemas.BlogResponse)
def read_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = crud.get_blog(db, blog_id)
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

@app.post("/api/blogs", response_model=schemas.BlogResponse)
def create_blog(blog: schemas.BlogCreate, db: Session = Depends(get_db)):
    return crud.create_blog(db, blog.title, blog.content)

@app.put("/api/blogs/{blog_id}", response_model=schemas.BlogResponse)
def update_blog(blog_id: int, blog: schemas.BlogCreate, db: Session = Depends(get_db)):
    updated = crud.update_blog(db, blog_id, blog.title, blog.content)
    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    return updated

@app.delete("/api/blogs/{blog_id}")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = crud.delete_blog(db, blog_id)
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"message": "Blog deleted"}
