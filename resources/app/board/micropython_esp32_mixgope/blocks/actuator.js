'use strict';

goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');

Blockly.Blocks.actuator.HUE = 100

//LED
Blockly.Blocks['number'] = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                ["L1", "led_L1"],
                ["L2", "led_L2"]
            ]), 'op')
        this.setOutput(true);
    }
};

Blockly.Blocks['ledswitch'] = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ESP32_ON, "1"],
                [Blockly.MIXLY_ESP32_OFF, "0"],
                [Blockly.MIXLY_ESP32_TOGGLE, "-1"]
            ]), "flag");
        this.setOutput(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
    }
};

Blockly.Blocks.actuator_led_bright = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETTING);
    this.appendValueInput('led')
    .appendField(Blockly.MIXLY_BUILDIN_LED)
    this.appendValueInput('bright')
    .appendField(Blockly.MIXLY_PULSEIN_STAT)  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_LED_SETONOFF);
  }
};

Blockly.Blocks.actuator_get_led_bright = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET);
    this.appendValueInput('led')
    .appendField(Blockly.MIXLY_BUILDIN_LED)
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_PULSEIN_STAT)  
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_LED_GETONOFF);
  }
};

Blockly.Blocks.actuator_led_brightness = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETTING);
    this.appendValueInput('led')
    .appendField(Blockly.MIXLY_BUILDIN_LED)
    this.appendValueInput('bright')
    .appendField(Blockly.MIXLY_BRIGHTNESS)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32S2_LED_SETBRIGHT);
  }
};

Blockly.Blocks['actuator_onboard_neopixel_rgb_change_mod'] = {
    init: function(){
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_RGB)
        .appendField(Blockly.MIXLY_LCD_SETCOLOR+Blockly.MIXLY_MICROBIT_PY_STORAGE_MODE)
        .appendField(new Blockly.FieldDropdown([
            ["RGB", "RGB"],
            ["GRB", "GRB"]]), "key");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.actuator_onboard_neopixel_rgb_show_all = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB);
        this.appendValueInput("RVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_R);
        this.appendValueInput("GVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_G);
        this.appendValueInput("BVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_B);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
    }
};

Blockly.Blocks.actuator_onboard_neopixel_rgb_show_all_chase = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_CHASE);
        this.appendValueInput("RVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_R);
        this.appendValueInput("GVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_G);
        this.appendValueInput("BVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_B);
        this.appendValueInput('time')
            .setCheck(Number)
            .appendField(Blockly.PYTHON_RANGE_STEP)
            .appendField(Blockly.MIXLY_MILLIS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
    }
};

Blockly.Blocks.actuator_onboard_neopixel_rgb_show_one = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendValueInput("RVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_R);
        this.appendValueInput("GVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_G);
        this.appendValueInput("BVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_B);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
    }
};

Blockly.Blocks.actuator_onboard_neopixel_rgb_show_all_rainbow = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RAINBOW);
        this.appendValueInput('time')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_DURATION)
            .appendField(Blockly.MIXLY_MILLIS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
    }
};

Blockly.Blocks.actuator_onboard_neopixel_write = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_RGB_WRITE)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_WRI);
    }
};


//music
Blockly.Blocks.esp32_s2_onboard_music_pitch = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_TONE);  
        this.appendValueInput('pitch')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
    }
};

Blockly.Blocks.esp32_s2_onboard_music_pitch_with_time = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);        
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_TONE);    
        this.appendValueInput('pitch')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_FREQUENCY);
        this.appendValueInput('time')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_DURATION);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE2);
    }
};

Blockly.Blocks.esp32_s2_onboard_music_stop = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_NOTONE); 
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_SET_ONBOARD_MUSIC_STOP);
    }
};

Blockly.Blocks.esp32_s2_onboard_music_play_list = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('LIST')
            .appendField(Blockly.MIXLY_ESP32_MUSIC_PLAY_LISTS)        
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_PLAY_LISTS);

    }
}

Blockly.Blocks.esp32_s2_music_set_tempo = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('TICKS')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_MICROBIT_JS_SET_TEMPO)
            .appendField(Blockly.MICROBIT_ACTUATOR_ticks);
        this.appendValueInput('BPM')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_SPEED);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_SET_TEMPO);
    }
}

Blockly.Blocks.esp32_s2_music_get_tempo = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_Get_current_tempo)
        this.setOutput(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_GET_TEMPO);
    }
}

Blockly.Blocks.esp32_s2_music_reset = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_Reset_music)
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_RESET);
    }
}


Blockly.Blocks.esp32_mixgo_music_play_list_show = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('LIST')
            .appendField(Blockly.MIXLY_ESP32_MUSIC_PLAY_LISTS)
        this.appendValueInput('PIN')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_PIN );
        // this.appendValueInput('DISPLAY')
        //     .appendField(Blockly.MIXLY_ESP32_MIXGO_MUSIC_SHOW_IN);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_MIXGO_MUSIC_PLAY_TONE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_PLAYSHOW)
    }
}

Blockly.Blocks.actuator_extern_led_bright = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_SETTING)
        .appendField(Blockly.MIXLY_EXTERN_LED)
    this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
    this.appendValueInput('bright')
    .appendField(Blockly.MIXLY_PULSEIN_STAT)  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_EXTERN_LED_SETONOFF);
  }
};

Blockly.Blocks.actuator_extern_get_led_bright = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
        .appendField(Blockly.MIXLY_EXTERN_LED)
    this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_PULSEIN_STAT)  
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_EXTERN_LED_GETONOFF);
  }
};

Blockly.Blocks.actuator_extern_led_brightness = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_SETTING)
        .appendField(Blockly.MIXLY_EXTERN_LED)
    this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
    this.appendValueInput('bright')
    .appendField(Blockly.MIXLY_BRIGHTNESS)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_EXTERN_LED_SETBRIGHT);
  }
};

Blockly.Blocks.esp32_s2_audio_init =  {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField(Blockly.MIXLY_SETUP+Blockly.MIXGO_CE_SPEAKER);
        this.appendValueInput('sclk')
            .setCheck(Number)
            .appendField('SCLK');
        this.appendValueInput('ws')
            .setCheck(Number)
            .appendField('WS');
        this.appendValueInput('data')
            .setCheck(Number)
            .appendField('DATA');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_SPI_INIT_TOOLTIP);   
    }
};

Blockly.Blocks.esp32_s2_audio_wave_play = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField(Blockly.MIXGO_CE_SPEAKER);
        this.appendValueInput('wav')
            .appendField(Blockly.MIXGO_WAVE)        
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
}

Blockly.Blocks.esp32_s2_audio_wave_is_playing = {
    init: function(){
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
            .setCheck('var')
            .appendField(Blockly.MIXGO_CE_SPEAKER);
        this.appendDummyInput()
            .appendField(Blockly.MIXGO_WAVE_IS_PLAYING);
        this.setOutput(true);
        this.setInputsInline(true);
    }
};

//Servo
Blockly.Blocks.servo_init = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput("VAR")
            .appendField(Blockly.MIXLY_SETUP+Blockly.MIXLY_SERVO)
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_PIN )
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.servo_move = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput("VAR")
            .appendField(Blockly.MIXLY_SERVO)
        this.appendValueInput("DEGREE", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_DEGREE_0_180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_SERVO_MOVE);
    }
};

Blockly.Blocks.servo_speed_360 = {
    init: function() {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput("VAR")
            .appendField("360°"+Blockly.MIXLY_SERVO)
        this.appendValueInput("SPEED", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_SETTING+Blockly.blockpy_turtle_rotate+Blockly.MIXLY_SPEED+" (-10~10)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_SERVO_360_TOOLTIP);
    }
};

Blockly.Blocks.actuator_ms32006_init = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('SUB')
            .appendField("初始化")
            .setCheck("var");
        this.appendDummyInput()
            .appendField("电机驱动");           
        this.appendDummyInput()
            .appendField("地址")
            .appendField(new Blockly.FieldDropdown([['A', 'ms32006.ADDRESS_A'], ['B', 'ms32006.ADDRESS_B']]), 'mode');          
        this.appendValueInput('SUB1')
            .setCheck("var")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("通信");             
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip("初始化MS32006电机驱动，使用I2C通信");
    }
};

Blockly.Blocks.actuator_ms32006_dcmotor = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendValueInput('SUB')
        .appendField("直流电机")
        .setCheck("var");
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_MICROBIT_Direction)
              .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CLOCKWISE, "ms32006.MOT_CW"],
        [Blockly.Msg.ANTI_CLOCKWISE, "ms32006.MOT_CCW"],
        [Blockly.MOTOR_N, "ms32006.MOT_N"],
        [Blockly.MOTOR_P, "ms32006.MOT_P"]
        ]), "direction");
  this.appendValueInput('speed')
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_STEPPER_SET_SPEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置直流电机的状态及转速(0-100)");
  }
};



Blockly.Blocks.actuator_ms32006_stepper = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendValueInput('SUB')
        .appendField("步进电机")
        .setCheck("var");
    this.appendDummyInput()
        .appendField("选择")
        .appendField(new Blockly.FieldDropdown([['A', 'ms32006.MOT_A'], ['B', 'ms32006.MOT_B']]), 'mode');      
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_MICROBIT_Direction)
              .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CLOCKWISE, "ms32006.MOT_CW"],
        [Blockly.Msg.ANTI_CLOCKWISE, "ms32006.MOT_CCW"]
        ]), "direction");
  this.appendValueInput('speed')
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("转速");
  this.appendValueInput('steps')
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("步数");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置步进电机的状态、转速、步数(0-2047)");
  }
};