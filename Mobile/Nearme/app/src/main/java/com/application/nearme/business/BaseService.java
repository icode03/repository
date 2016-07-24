package com.application.nearme.business;

import android.util.Log;

import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

/**
 * Created by Marius Oprea on 5/4/2016.
 */
public class BaseService {

    public static String getJsonContent(String url) {
        StringBuilder builder = new StringBuilder();
        String line = "", response = "";
        try {
            URL urlToRequest = new URL(url);
            HttpURLConnection urlConnection = (HttpURLConnection) urlToRequest.openConnection();
            urlConnection.setRequestMethod("GET");

            InputStream inputStream = new BufferedInputStream(urlConnection.getInputStream());
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"), 8);

            while ((line = reader.readLine()) != null) {
                builder.append(line + "\n");
            }
            response = builder.toString();
            return response;
        } catch (Exception e) {
            Log.e("error", e.toString());
        }
        return response;
    }

    public static String postJsonContent(String url, JSONObject jsonObject) {
        StringBuilder builder = new StringBuilder();
        String response = "", line = "";
        try {
            URL posUrl = new URL(url);
            HttpURLConnection urlConnection = (HttpURLConnection) posUrl.openConnection();
            urlConnection.setDoOutput(true);
            urlConnection.setRequestProperty("Content-Type", "application/json");
            urlConnection.setRequestMethod("POST");

            OutputStreamWriter os = new OutputStreamWriter(urlConnection.getOutputStream());
            os.write(jsonObject.toString());
            os.flush();
            os.close();
            InputStream inputStream = new BufferedInputStream(urlConnection.getInputStream());
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"), 8);

            while ((line = reader.readLine()) != null) {
                builder.append(line + "\n");
            }

            return builder.toString();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ProtocolException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return response;
    }

}