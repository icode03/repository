package com.application.nearme.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.application.nearme.R;
import com.application.nearme.model.Category;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void getStartedBtnClick(View v)
    {
        Intent startCategoryActivity = new Intent(MainActivity.this, CategoryActivity.class);
        startActivity(startCategoryActivity);
    }
}
