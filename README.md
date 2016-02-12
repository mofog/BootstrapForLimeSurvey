# BootstrapForLimeSurvey
## A Responsive LimeSurvey Template Based On Bootstrap

(c) 2013-2016 mofog (http://mofog.github.io/BootstrapForLimeSurvey)
This is a survey template for LimeSurvey that has been verified on Version 2.06+ Build 160129.
This software is licensed under the GPL (GNU GENERAL PUBLIC LICENSE, see attached file).

### Code Sample for Semantic Differentials
Step 1: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('semanticDifferential');
  });
</script>
```
Step 2: Set question type to "Array".  
Step 3: Add the answer options, e.g., 5 or 7, but leave the texts blank.
Step 4: Add subquestions according to your needs, e.g., "confusing|clearly structured".
Step 5: Done.

### Code Sample for Likert scales
Step 1: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('likert');
  });
</script>
```
Step 2: Set question type to "List (radio)".  
Step 3: Add the answer options, e.g.,  

| Code | Answer option |
| ---- | ------------- |
| A1   | (1) Strongly disagree |
| A2   | (2) |
| A3   | (3) |
| A5   | (4) |
| A5   | (5) |
| A6   | (6) |
| A7   | (7) Strongly agree |

Step 4: Done.

### Code Sample for NASA-TLX scales
Step 1: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('nasa-tlx');
  });
</script>
```
Step 2: Set question type to "Multiple numerical input".  
Step 3: Define question as mandatory.  
Step 4: "Show advanced settings".  
Step 5: In the group "Slider", set "Use slider layout" to yes.  
Step 6: Set the "Slider minimum value" to 1, and the "Slider maximum value" to 21.  
Step 7: Set "Slider left/right text separator" to "|".  
Step 8: Edit subquestions. Add one subquestion for each NASA-TLX question, i.e. six.  
Step 9: Set each "Subquestion" accordingly, for example: "Mental Demands|Very low|Very high", and then "Save changes".  
Step 10: Done.

### Code Sample for SAM (Self-Assessment Manikin) scales
Step 1: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('sam');
  });
</script>
```
Step 2: Set question type to "Array".  
Step 3: Define question as mandatory.  
Step 4: Edit subquestions, but don't add any, just hit "Save changes" so that LimeSurvey is happy.  
Step 5: Edit answer options.  
  Substep 1: Click the pencil to "start the HTML editor in a popup window".  
  Substep 2: In the popup window, click on the button to add an image.  
  Substep 3: Click on "browse server".  
  Substep 4: Upload all your SAM images.  
  Substep 5: Select one of the uploaded images by double clicking.  
  Substep 6: Copy the URL of the image to your clipboard.  
  Substep 7: Hit "Cancel" in the "Image properties" window.  
  Substep 8: Close the HTML editor popup window.  
  Substep 9: Set the "Answer option" for the first SAM image to
  ```
  <img src="(INSERT CLIPBOARD CONTENT HERE)" />
  Example:
  <img src="/upload/surveys/921666/images/sam-a-1.png" />
  ```
  Substep 10: Add the remaining SAM images to your liking and adapt the URL accordingly, for example:
  ```
  <img src="/upload/surveys/921666/images/sam-a-2.png" />
  ```
Step 6: Done.  

