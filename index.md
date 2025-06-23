---
layout: default-sidebar
title: Home
permalink: /
nav_order: 1
---

<!-- ## Biography

<p style = "text-align: justify;">

My journey into leveraging <b>data science for healthcare</b> began with a foundational interest in improving patient care and a proactive desire to gain hands-on research experience. Starting as a volunteer in a biomedical research setting, I quickly recognized the potential of computational methods in healthcare accessibility and quality. This realization sparked a passion for machine learning, leading me to pursue self-directed learning in programming and data analysis alongside my initial experiences.
Driven to apply these rapidly developing skills to meaningful problems, I transitioned into formal graduate studies. My academic path has focused on honing expertise in <b>pathology, computer vision, and machine learning</b>, culminating in my current pursuit of a PhD. My core ambition is to develop responsible, data-driven tools that can enhance diagnostic accuracy, personalize treatments, and ultimately improve outcomes for patients facing complex diseases like cancer. I am dedicated to contributing to a future where <b>data empowers more efficient, equitable, and effective healthcare</b>.
</p> -->
<!-- <h2>🧠 My Skillset</h2> -->

## Overview of Experience
<iframe
    src="https://fuminaba-home.streamlit.app/"
    width="100%"
    height="600"
    style="border: none;"
    loading="lazy"
></iframe>
<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;zorder:1">
  <canvas id="skillsRadar" width="90%" height="100"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('skillsRadar').getContext('2d');
const skillsRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Machine/Deep Learning', 'Multiple instance learning',
            'Research Programming', 'Image Processing',
            'Statistical Inference & Learning',
            'Data Visualization', 'Experimental Design',
            'Point Cloud/Graph Nets', 'Scientific Communication',
        ],
        datasets: [
            {
                label: 'Experience (years)',
                data: [3, 2.5, 6, 3, 2.5, 3.5, 6, 1, 4],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 123, 255, 1)'
            },
        ]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 7,
                ticks: {
                    stepSize: 1
                },
                pointLabels: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});
</script>

## Current Research Focus
Updated <u>June 05, 2025</u>
<p style = "text-align: justify;">
I am currently a <b>PhD student</b> in the Interdisciplinary Oncology Program (<a href = "https://www.iop.ca/">IOP</a>) at the BC Cancer Research Institute (BCCRI), working with Drs. Martial Guillaud and Calum MacAulay. 
We work with medical images, primarily of histology and cytology slides. Through image processing, charactersitics of individual cells are measured and analyzed to extract clinically relevant insights of the patient. 
More recently, we have began investigating the utility of multimodal imaging data, incorporating radiology images into our workflows.
A priority for my research is translating complex data into clinically meaningful insights, ultimately improving patient outcomes and healthcare efficiency in three ways: early cancer detection, reducing overtreatment and developing prognostic tools. 
</p>

[View my research and projects →](/research/research_index.md)

Check out more:  

[CV (PDF)](/assets/Fumiya_Inaba_CV.pdf) | [GitHub](https://github.com/fuminaba) | [LinkedIn](https://linkedin.com/in/fumi-inaba)  
