from pydantic import BaseModel

class BlogBase(BaseModel):
    title: str
    content: str

class BlogCreate(BlogBase):
    pass

class BlogResponse(BlogBase):
    id: int

    class Config:
        orm_mode = True
