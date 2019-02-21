int inByte = 0;

void setup() {
  Serial.begin(9600);
  while (!Serial) {}
}

void loop() {
  if (Serial.available() > 0) {
    inByte = Serial.read();
    Serial.write(inByte);
  }
}
