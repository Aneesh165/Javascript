document.getElementById("calculate").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  const height = heightCm / 100;
  const bmi = weight / (height * height);

  const message =
    bmi < 18.5
      ? "You are underweight."
      : bmi < 25
      ? "You have a normal weight."
      : bmi < 30
      ? "You are overweight."
      : "You are obese.";

  document.getElementById("bmi").innerText = bmi.toFixed(2);
  document.getElementById("message").innerText = message;
});
