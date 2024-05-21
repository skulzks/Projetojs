function calculateMetrics() {
        const direct = parseInt(document.getElementById("direct").value);
        const stories = parseInt(document.getElementById("stories").value);
        const comments = parseInt(document.getElementById("comments").value);
        const shares = parseInt(document.getElementById("shares").value);
        const saves = parseInt(document.getElementById("saves").value);
        const likes = parseInt(document.getElementById("likes").value);
        const views = (likes + saves + comments + shares + stories + direct) * 0.05;

        let message = "";
        if (views >= 0.1 * (likes + saves + comments + shares + stories + direct)) {
          message = "Incrível! Suas visualizações estão acima de 10% do seu engajamento total.";
        } else if (views >= 0.05 * (likes + saves + comments + shares + stories + direct)) {
          message = "Bom! Suas visualizações representam entre 5% e 10% do seu engajamento total.";
        } else {
          message = 
        "Precisa melhorar! Suas visualizações estão abaixo de 5% do seu engajamento total.";
        }

        document.getElementById("result").innerHTML = message;
      }