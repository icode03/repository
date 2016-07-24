package com.application.nearme.adapter;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.application.nearme.R;
import com.application.nearme.model.Category;
import com.application.nearme.util.Constants;

import java.util.ArrayList;

/**
 * Created by Marius Oprea on 4/30/2016.
 */
public class CategoryAdapter extends BaseAdapter {

    private ArrayList<Category> mListItems;
    private LayoutInflater mLayoutInflater;
    private Context mContext;

    public CategoryAdapter(Context context, ArrayList<Category> arrayList) {
        mListItems = arrayList;
        mContext = context;
        mLayoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return mListItems.size();
    }

    @Override
    public Category getItem(int i) {
        return mListItems.get(i);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }


    @Override
    public View getView(int position, View view, ViewGroup viewGroup) {
        ViewHolder holder;

        if (view == null) {
            holder = new ViewHolder();
            view = mLayoutInflater.inflate(R.layout.list_category_item, viewGroup, false);

            holder.itemName = (TextView) view.findViewById(R.id.itemCategoryTitle);
            holder.itemImage = (ImageView) view.findViewById(R.id.itemCategoryImage);

            view.setTag(holder);
        } else {
            holder = (ViewHolder) view.getTag();
        }

        Category category = mListItems.get(position);
        if (category != null) {
            holder.itemName.setText(category.getTitle());
            holder.itemImage.setImageResource(getDrawable(mContext, category.getImageName()));
        } else {
            holder.itemName.setText("Unknown Category");
            holder.itemImage.setImageResource(getDrawable(mContext, "default_image"));
        }

        //this method must return the view corresponding to the data at the specified position.
        return view;

    }

    public static int getDrawable(Context context, String name)
    {
        return context.getResources().getIdentifier(name,
                "drawable", context.getPackageName());
    }

    private class ViewHolder {
        protected TextView itemName;
        protected ImageView itemImage;
    }
}
