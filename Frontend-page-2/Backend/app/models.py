from pydantic import BaseModel, Field
from typing import Optional
from bson import ObjectId

# -----------------------------
# CATEGORY MODELS
# -----------------------------

class CategoryCreate(BaseModel):
    name: str


class CategoryResponse(BaseModel):
    id: Optional[str] = Field(alias="_id")
    name: str

    class Config:
        allow_population_by_field_name = True


# -----------------------------
# SUB-CATEGORY MODELS
# -----------------------------

class SubCategoryCreate(BaseModel):
    category_id: str
    name: str


class SubCategoryResponse(BaseModel):
    id: Optional[str] = Field(alias="_id")
    category_id: str
    name: str

    class Config:
        allow_population_by_field_name = True


# -----------------------------
# BUSINESS MODELS
# -----------------------------

class BusinessCreate(BaseModel):
    category_id: str
    sub_category_id: str
    business_name: str


class BusinessResponse(BaseModel):
    id: Optional[str] = Field(alias="_id")
    category_id: str
    sub_category_id: str
    business_name: str

    class Config:
        allow_population_by_field_name = True
