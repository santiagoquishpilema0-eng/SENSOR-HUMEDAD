body {
  margin: 0;
  background: linear-gradient(135deg, #1e1e2f, #2c2c54);
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

.titulo {
  font-size: 40px;
  color: cyan;
  margin-top: 20px;
}

.card {
  border: 3px solid cyan;
  padding: 20px;
  margin: 30px auto;
  border-radius: 15px;
  width: 80%;
  max-width: 500px;
  background: rgba(255,255,255,0.05);
}

.medidor {
  font-size: 50px;
  margin: 20px;
  color: #00ff88;
}

.alerta {
  color: #ff4d4d;
  font-weight: bold;
  display: none;
  margin-bottom: 10px;
}

.pista {
  position: relative;
  width: 100%;
  height: 120px;
  background: #333;
  border-bottom: 4px solid #555;
  border-radius: 15px;
  overflow: hidden;
}

#carro {
  position: absolute;
  bottom: 10px;
  left: 0%;
  font-size: 60px;
  transition: left 0.3s ease-out;
}
