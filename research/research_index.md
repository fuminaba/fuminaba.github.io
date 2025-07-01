---
layout: default
title: Research
permalink: /research/
nav_order: 2
---

# Research Interests
<p style = 'text-align: justify;'>
My research interests are primarily in deep learning-based computer vision applications in medical imaging. 
More specifically, I'm interested in exploring novel and interpretable methods to extract meaningful insights 
from complex medical images utilizing attention mechanisms, semi-supervised learning etc. 
For instance, both tissue architecture/growth patterns and individual cell characteristics may be clinically relevant in cancer. 
</p>

---

## Select Research and Projects
<h3><b>Multiple Instance Learning of Large-scale DNA Organization to Characterize Prostate Cancer Aggressiveness</b></h3>
<p style = 'text-align: justify'>
2025 June 20 - Presented at the Annual Congress of the European Association for Cancer Research (EACR) 2025 in Lisbon, Portugal. <br>
</p>
<embed src='https://fuminaba.github.io/assets/[2025](Jun19) EACR-Poster-Fumi.pdf' width='100%' height='600'/>
<a href = 'https://fuminaba.github.io/assets/[2025](Jun19) EACR-Poster-Fumi.pdf' target = '_blank'>
[View poster]</a> | <a href = "fuminaba.github.io/404.html">[View code on GitHub]</a> (in progress - to be released with publication)

<p style = 'text-align: justify'><b>Description: </b>
In this project we developed a score using large-scale DNA organization (LDO) features and a linear classifier to characterize prostate cancer aggressiveness. LDO features describe the chromatin organization patterns within cell nuclei stained with a DNA-stoichiometric stain, Feulgen-thionin. Interestingly, we found that features which describe cell nuclei are correlated with Gleason score, and to a lesser extent, treatment response.
</p>
<p style = 'text-align: justify'><b>Contributions: </b>
In this project, I built an <u>ELT (extract, load, trasform) pipeline</u> for <u>multiple instance learning</u> data. Tabular LDO feature data is loaded as a list of tensors, each tensor being a collection of nuclei and their respective features. This data is used to train a linear classifier optimizing for both instance and bag loss in an n-fold cross validation.
</p>
<p style = 'text-align: justify'>
<b>Skills & Frameworks:</b> Python, PyTorch, pandas, NumPy, scikit-learn, ELT pipelines<br>
</p>

---   

<br>
<h3><b>Attention-Enhanced Sequential U-Net for Nuclear Segmentation</b></h3>
<p style = 'text-align: justify'>
2025 March 20 - Presented at Bioinformatics, Interdisciplinary Oncology, Genome Science and Technology (B.I.G) Research Day 2025 in Vancouver, BC, Canada.
</p>
<embed src='https://fuminaba.github.io/assets/[2025](Mar20) BIG25-Poster-Fumi.pdf' width='100%' height='600'/>
<a href = 'https://fuminaba.github.io/assets/[2025](Mar20) BIG25-Poster-Fumi.pdf' target = '_blank'>
[View poster]</a> | <a href = "fuminaba.github.io/404.html">[View code on GitHub]</a> (coming soon!)

<p style = 'text-align: justify'><b>Description: </b>
This project studies efficiency against performance of deep learning segmentation models, and the attention mechanisms role in reducing the number of parameters. We studied the performance of standard U-Net models and attention U-Net models on a test set of nuclear images. Additionally, we tested their capabilities for two tasks - nuclear center detection and nuclear contour segmentation. We found that while the respective tasks could be learned with the standard U-Net with fewer parameters than originally proposed by Ronneberger et al., the <u>attention U-Net was able to bring the number of parameters down considerably</u> more - near 1% of the original number of parameters. We also found that for the nuclei detection task, attention U-Nets generalized better to other nuclear images of different stains.
</p>
<p style = 'text-align: justify'><b>Contributions: </b>
In this project I built a segmentation model training pipeline on a dataset of approximately 20,000 images and tested on 1,000 test images. The distribution of the test DICE scores were compared between different U-Net and Attention U-Net of different sizes (parameter count). Only the number of feature channels were altered to minimize unexpected behavior due to changing the architecture (such as number of max pooling which may fundamentally alter the scale at which the model sees the images).
</p>
<p style = 'text-align: justify'>
<b>Skills & Frameworks:</b> Python, PyTorch, matplotlib, SciPy<br>
</p>
