package com.application.nearme.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.application.nearme.model.Place;

import java.util.ArrayList;

/**
 * Created by Marius Oprea on 4/30/2016.
 */
public class PlacesAdapter extends BaseAdapter {

    private ArrayList<Place> mListItems;
    private LayoutInflater mLayoutInflater;
    private Context mContext;

    public PlacesAdapter(Context context, ArrayList<Place> arrayList) {
        mListItems = arrayList;
        //get the layout inflater
        mLayoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        mContext = context;
    }

    @Override
    public int getCount() {
        return mListItems.size();
    }

    @Override
    public Object getItem(int position) {
        return mListItems.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;

        return convertView;
    }

    public int getFlagResource(Context context, String name) {
        int resId = context.getResources().getIdentifier(name, "drawable", "com.nearme");
        return resId;
    }

    private class ViewHolder {
        protected TextView itemName;
        protected TextView itemShortDescription;
        protected TextView itemRating;
        protected TextView itemDistance;
        protected ImageView itemImage;
    }
}

