import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const CuatroGraficas = () => {
  useEffect(() => {
    // Datos ficticios para las gráficas
    const dataGrafica1 = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Grafica 1',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    const dataGrafica4 = {
      labels: ['One', 'Two', 'Three', 'Four', 'Five'],
      datasets: [
        {
          label: 'Grafica 4',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Configuración común para las gráficas
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Renderizar las gráficas
    const ctxGrafica1 = document.getElementById('grafica1');
    new Chart(ctxGrafica1, {
      type: 'bar',
      data: dataGrafica1,
      options: options,
    });

/*     const ctxGrafica2 = document.getElementById('grafica2');
    new Chart(ctxGrafica2, {
      type: 'doughnut',
      data: dataGrafica2,
      options: options,
    });

    const ctxGrafica3 = document.getElementById('grafica3');
    new Chart(ctxGrafica3, {
      type: 'line',
      data: dataGrafica3,
      options: options,
    }); */

    const ctxGrafica4 = document.getElementById('grafica4');
    new Chart(ctxGrafica4, {
      type: 'bar',
      data: dataGrafica4,
      options: options,
    });
  }, []);

  return (
    <div className="cuatro-graficas-container">
      <div className="grafica">
        <canvas id="grafica1" width="400" height="400"></canvas>
      </div>
      <div className="grafica">
        <canvas id="grafica2" width="400" height="400"></canvas>
      </div>
      <div className="grafica">
        <canvas id="grafica3" width="400" height="400"></canvas>
      </div>
      <div className="grafica">
        <canvas id="grafica4" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default CuatroGraficas;
