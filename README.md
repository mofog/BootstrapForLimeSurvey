# BootstrapForLimeSurvey
## A Responsive LimeSurvey Template Based On Bootstrap

(c) 2013-2016 mofog (http://mofog.github.io/BootstrapForLimeSurvey)
This is a survey template for LimeSurvey that has been verified on Version 2.50+ Build 160210.
This software is licensed under the GPL (GNU GENERAL PUBLIC LICENSE, see attached file).

### Code Sample for Likert scales
1. Step: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('likert');
  });
</script>
```
2. Step: Set question type to "List (radio)".
3. Step: Add the answer options, e.g.,

| Code | Answer option |
| ---- | ------------- |
| A1   | (1) Strongly disagree |
| A2   | (2) |
| A3   | (3) |
| A5   | (4) |
| A5   | (5) |
| A6   | (6) |
| A7   | (7) Strongly agree |

4. Step: Done.

### Code Sample for NASA-TLX scales
1. Step: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('nasa-tlx');
  });
</script>
```
2. Step: Set question type to "Multiple numerical input".
3. Step: Define question as mandatory.
4. Step: "Show advanced settings".
5. Step: In the group "Slider", set "Use slider layout" to yes.
6. Step: Set the "Slider minimum value" to 1, and the "Slider maximum value" to 21.
7. Step: Set "Slider left/right text separator" to "|".
8. Step: Edit subquestions. Add one subquestion for each NASA-TLX question, i.e. six.
9. Step: Set each "Subquestion" accordingly, for example: "Mental Demands|Very low|Very high", and then "Save changes".
10. Step: Done.

### Code Sample for SAM (Self-Assessment Manikin) scales
1. Step: Add JS code to your question (either in the field "Question" or "Help"):
```
<script type="text/javascript">	
  bfls(document).ready(function(){ 
   bfls('#question{QID}').addClass('sam');
  });
</script>
```
2. Step: Set question type to "Array".
3. Step: Define question as mandatory.
4. Step: Edit subquestions, but don't add any, just hit "Save changes" so that LimeSurvey is happy.
5. Step: Edit answer options.
  1. Step: Click the pencil to "start the HTML editor in a popup window".
  2. Step: In the popup window, click on the button to add an image.
  3. Step: Click on "browse server".
  4. Step: Upload all your SAM images.
  5. Step: Select one of the uploaded images by double clicking.
  6. Step: Copy the URL of the image to your clipboard.
  7. Step: Hit "Cancel" in the "Image properties" window.
  8. Step: Close the HTML editor popup window.
  9. Step: Set the "Answer option" for the first SAM image to
  ```
  <img src="(INSERT CLIPBOARD CONTENT HERE)" />
  Example:
  <img src="/upload/surveys/921666/images/sam-a-1.png" />
  ```
  10. Step: Add the remaining SAM images to your liking and adapt the URL accordingly, for example:
  ```
  <img src="/upload/surveys/921666/images/sam-a-2.png" />
  ```
6. Step: Done.  

