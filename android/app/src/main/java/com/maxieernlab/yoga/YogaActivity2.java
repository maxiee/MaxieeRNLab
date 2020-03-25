package com.maxieernlab.yoga;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.yoga.YogaEdge;
import com.facebook.yoga.YogaFlexDirection;
import com.facebook.yoga.YogaNode;
import com.facebook.yoga.YogaNodeJNIFinalizer;

import javax.annotation.Nullable;

public class YogaActivity2 extends AppCompatActivity {
    private static final int VIEW_WIDTH = 200;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        FrameLayout container = new FrameLayout(this);

        /**
         * 纯布局数值计算
         */

        float screenWidth = getWindowManager().getDefaultDisplay().getWidth();
        float screenHeight = getWindowManager().getDefaultDisplay().getHeight();

        YogaNode root = new YogaNodeJNIFinalizer();
        root.setWidth(screenWidth);
        root.setHeight(screenHeight);
        root.setFlexDirection(YogaFlexDirection.ROW);

        YogaNode rect1 = new YogaNodeJNIFinalizer();
        rect1.setHeight(VIEW_WIDTH);
        rect1.setWidth(VIEW_WIDTH);
        rect1.setMargin(YogaEdge.ALL, 20);

        YogaNode rect2 = new YogaNodeJNIFinalizer();
        rect2.setHeight(VIEW_WIDTH);
        rect2.setWidth(VIEW_WIDTH);
        rect2.setMargin(YogaEdge.ALL, 20);

        YogaNode rect3 = new YogaNodeJNIFinalizer();
        rect3.setHeight(VIEW_WIDTH);
        rect3.setWidth(VIEW_WIDTH);
        rect3.setMargin(YogaEdge.ALL, 20);

        root.addChildAt(rect1, 0);
        root.addChildAt(rect2, 1);
        root.addChildAt(rect3, 2);

        // 给定屏幕长宽，求解屏幕元素位置
        root.calculateLayout(screenWidth, screenHeight);

        /**
         * Android 视图创建于定位
         */
        ViewGroup.LayoutParams lp = new FrameLayout.LayoutParams(VIEW_WIDTH, VIEW_WIDTH);

        View v1 = new View(this);
        v1.setLayoutParams(lp);
        v1.setBackgroundColor(Color.parseColor("#d50000"));

        View v2 = new View(this);
        v2.setLayoutParams(lp);
        v2.setBackgroundColor(Color.parseColor("#ff1744"));

        View v3 = new View(this);
        v3.setLayoutParams(lp);
        v3.setBackgroundColor(Color.parseColor("#ff5252"));

        container.addView(v1);
        container.addView(v2);
        container.addView(v3);

        v1.setX(rect1.getLayoutX());
        v1.setY(rect1.getLayoutY());
        v2.setX(rect2.getLayoutX());
        v2.setY(rect2.getLayoutY());
        v3.setX(rect3.getLayoutX());
        v3.setY(rect3.getLayoutY());

        setContentView(container);
    }
}
