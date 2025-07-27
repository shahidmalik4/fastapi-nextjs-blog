from faker import Faker
from sqlalchemy.orm import Session
from . import models
from .database import SessionLocal, engine

fake = Faker()

# Create DB tables (in case they don't exist)
models.Base.metadata.create_all(bind=engine)

def seed_fake_blogs(db: Session, n: int = 20):
    for _ in range(n):
        blog = models.Blog(
            title=fake.sentence(nb_words=6),
            content=fake.paragraph(nb_sentences=5),
        )
        db.add(blog)
    db.commit()
    print(f"Inserted {n} fake blog posts.")

if __name__ == "__main__":
    db = SessionLocal()
    try:
        seed_fake_blogs(db, 25)  # create 25 fake blogs
    finally:
        db.close()
