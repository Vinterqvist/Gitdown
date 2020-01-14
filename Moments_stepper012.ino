// Include the Arduino Stepper.h library:
#include <Stepper.h>
const int stepsPerRevolution = 2048;

Stepper myStepper0 = Stepper(stepsPerRevolution, 2, 3, 4, 5);
Stepper myStepper1 = Stepper(stepsPerRevolution, 6, 7, 8, 9);
Stepper myStepper2 = Stepper(stepsPerRevolution, 10, 11, 12, 13);
int play = 0; 
int slow = 0; 

void setup() {
  myStepper0.setSpeed(5);
  myStepper1.setSpeed(5);
  myStepper2.setSpeed(5);
  Serial.begin(9600);
}

void loop() {
  Serial.println("clockwise");
  for (int i = 0; i < stepsPerRevolution; i++) {
    
    myStepper2.step(1);
    if (play % 2 == 0) {
       myStepper1.step(1);
       //myStepper0.step(1);
    }
     if (play % 4 == 0) {
       myStepper0.step(1);
        Serial.println(slow);
       slow = slow + 1; 
       if (slow == stepsPerRevolution) {
        delay(2000); 
        slow = 0;
        }
       
    }
    play = play + 1; 
  }


}
