package com.maxieernlab.yoga;

import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.soloader.SoLoader;
import com.facebook.yoga.YogaEdge;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaJustify;
import com.facebook.yoga.YogaNode;

import java.util.ArrayList;

public class YogaActivity1 extends AppCompatActivity {
    private static final int VIEW_WIDTH = 200;

    private float screenHeight;
    private float screenWidth;

    private ArrayList<View> poolView = new ArrayList<>();
    private ArrayList<YogaNode> poolNode = new ArrayList<>();

    private String[][] colors = new String[][] {
            new String[] { "#d50000", "#ff1744", "#ff5252", "#ff8a80" },
            new String[] { "#c51162", "#f50057", "#ff4081", "#ff80ab" },
            new String[] { "#aa00ff", "#d500f9", "#e040fb", "#ea80fc" },
            new String[] { "#6200ea", "#651fff", "#7c4dff", "#b388ff" }
    };

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        FrameLayout container = new FrameLayout(this);

        screenWidth = getWindowManager().getDefaultDisplay().getWidth();
        screenHeight = getWindowManager().getDefaultDisplay().getHeight();
        log("Screen size = (%f, %f)", screenWidth, screenHeight);

        YogaNode root = new YogaNode();
        root.setWidth(screenWidth);
        root.setHeight(screenHeight);
        root.setFlexDirection(YogaFlexDirection.COLUMN);

        log("start");
        createRow1(root, 0);
        createRow1(root, 1);
        createRow1(root, 2);
        createRow1(root, 3);

        root.calculateLayout(screenWidth, screenHeight);

        for (int i = 0; i < poolView.size(); i++) {
            View v = poolView.get(i);
            YogaNode n = poolNode.get(i);
            YogaNode r = n.getOwner();
            v.setX(r.getLayoutX() + n.getLayoutX());
            v.setY(r.getLayoutY() + n.getLayoutY());
            log("v%d position=(%f, %f)",
                    i,
                    r.getLayoutX() + n.getLayoutX(),
                    r.getLayoutY() + n.getLayoutY());
            container.addView(v);
        }

        log("end");

        setContentView(container);
    }

    private void createRow1(YogaNode root, int index) {
        log("create index = " + index);
        YogaNode row = new YogaNode();
        row.setHeight(VIEW_WIDTH);
        row.setWidth(VIEW_WIDTH * 4);
        row.setFlexDirection(YogaFlexDirection.ROW);
        row.setMargin(YogaEdge.ALL, 20);

        for (int i = 0; i < 4; i++) {
            YogaNode n = new YogaNode();
            n.setWidth(VIEW_WIDTH);
            n.setHeight(VIEW_WIDTH);
            View v = createView(colors[index][i]);
            row.addChildAt(n, i);
            poolNode.add(n);
            poolView.add(v);
        }

        root.addChildAt(row, index);
    }

    private View createView(String color) {
        View v = new View(this);
        v.setBackgroundColor(Color.parseColor(color));
        ViewGroup.LayoutParams lp = new FrameLayout.LayoutParams(VIEW_WIDTH, VIEW_WIDTH);
        v.setLayoutParams(lp);
        return v;
    }

    private void log(String template, Object... objects) {
        Log.d("max-yoga", String.format(template, objects));
    }
}