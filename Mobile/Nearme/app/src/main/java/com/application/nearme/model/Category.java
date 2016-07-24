package com.application.nearme.model;

/**
 * Created by Marius Oprea on 4/30/2016.
 */
public class Category {

    String title;
    String imageName;

    public Category()
    {
    }

    public Category(String title, String imageName)
    {
        this.title = title;
        this.imageName = imageName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    @Override
    public String toString() {
        return "Category{" +
                "title='" + title + '\'' +
                ", imageName='" + imageName + '\'' +
                '}';
    }
}
