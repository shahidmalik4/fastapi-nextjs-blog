# backend/app/crud.py
from sqlalchemy.orm import Session
from . import models

def get_blogs(db: Session):
    return db.query(models.Blog).all()

def get_blog(db: Session, blog_id: int):
    return db.query(models.Blog).filter(models.Blog.id == blog_id).first()

def create_blog(db: Session, title: str, content: str):
    blog = models.Blog(title=title, content=content)
    db.add(blog)
    db.commit()
    db.refresh(blog)
    return blog

def update_blog(db: Session, blog_id: int, title: str, content: str):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if not blog:
        return None
    blog.title = title
    blog.content = content
    db.commit()
    db.refresh(blog)
    return blog

def delete_blog(db: Session, blog_id: int):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if blog:
        db.delete(blog)
        db.commit()
    return blog
