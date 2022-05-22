package com.example.reactapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    public static String content = "";
    private Button btnMoveScreen;
    private Button getBtnMoveScreen2;
    private EditText edtInput;
    private EditText edtGetString;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnMoveScreen = findViewById(R.id.btn_move_screen);
        getBtnMoveScreen2 = findViewById(R.id.btn_move_screen2);
        edtInput = findViewById(R.id.edt_input);
        edtGetString = findViewById(R.id.edt_getString);
        btnMoveScreen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                content = edtInput.getText().toString();
                finish();
            }
        });

        Intent intent = new Intent(MainActivity.this, MyReactActivity.class);
        getBtnMoveScreen2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                content = edtInput.getText().toString();
                startActivity(intent);
            }
        });

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String value = extras.getString("key");
            edtGetString.setText(value);
        }
    }

}