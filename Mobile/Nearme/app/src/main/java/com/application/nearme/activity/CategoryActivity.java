package com.application.nearme.activity;

import android.app.ActionBar;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import com.application.nearme.R;
import com.application.nearme.adapter.CategoryAdapter;
import com.application.nearme.model.Category;

import java.util.ArrayList;

public class CategoryActivity extends AppCompatActivity {

    private ListView listViewCategory;
    private ArrayList<Category> categoryArrayList;
    private CategoryAdapter categoryAdapter;
    private String[] categoryType;
    private String[] categoryName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_category);

        listViewCategory = (ListView) findViewById(R.id.categoryList);

        listViewCategory.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Object listItem = listViewCategory.getItemAtPosition(position);
                Intent googlePlaces = new Intent(CategoryActivity.this, GooglePlacesActivity.class);
                googlePlaces.putExtra("categoryType", ((Category)listItem).getImageName());
                startActivity(googlePlaces);
            }
        });

        categoryType = getResources().getStringArray(R.array.category_type);
        categoryName = getResources().getStringArray(R.array.category_name);

        categoryArrayList = new ArrayList<>();
        Category category = null;
        for (int i = 0; i < categoryType.length; i++) {
            category = new Category(categoryName[i], categoryType[i]);
            categoryArrayList.add(category);
        }

        categoryAdapter = new CategoryAdapter(CategoryActivity.this, categoryArrayList);
        listViewCategory.setAdapter(categoryAdapter);
    }
}
