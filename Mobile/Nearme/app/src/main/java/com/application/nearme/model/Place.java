package com.application.nearme.model;

/**
 * Created by Marius Oprea on 4/30/2016.
 */
public class Place {

    private String name;
    private String shortDescription;
    private String imageName;
    private int rating;
    private float distance;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public float getDistance() {
        return distance;
    }

    public void setDistance(float distance) {
        this.distance = distance;
    }

    @Override
    public String toString() {
        return "Place{" +
                "name='" + name + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", imageName='" + imageName + '\'' +
                ", rating=" + rating +
                ", distance=" + distance +
                '}';
    }
}
