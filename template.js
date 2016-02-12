/*
*
*	BootstrapForLimeSurvey
*	A Responsive LimeSurvey Template Based On Bootstrap
*	(c) 2013-2016 mofog (http://mofog.github.io/BootstrapForLimeSurvey)
*
*/

(function waitForBfls(){
	setTimeout(function(){
		if (!(typeof bfls === 'undefined')) {
			bfls(document).ready(function(){
				// Setup Dialogs
				setupAlertDialog();
				setupConfirmDialog();
				
				//Fix LimeSurvey's CSS and JS
				fixUi();
	
				//Progressbar
				setupProgressbar();
	
				//Question index
				setupQuestionIndex();
	
				//Question groups
				setupQuestionGroups();
	
				//Answers
				setupAnswers();
				
				//Optimize one line semantic differentials
				//Add this JavaScript code to the question that contains a semantic differential:
				//  <script type="text/javascript">	
				//	  bfls(document).ready(function(){ 
				//	  bfls('#question{QID}').addClass('semanticDifferential');
				//	  });
				//  </script>
				optimizeSemanticDifferential();
				
				//Optimize Likert Scales
				//Add this JavaScript code to the question that contains a Likert scale:
				//  <script type="text/javascript">	
				//	  bfls(document).ready(function(){ 
				//	  bfls('#question{QID}').addClass('likert');
				//	  });
				//  </script>
				optimizeLikert();
				
				//Optimize NASA-TLY Scales
				//Add this JavaScript code to the question that contains a NASA-TLX scale:
				//  <script type="text/javascript">	
				//	  bfls(document).ready(function(){ 
				//	  bfls('#question{QID}').addClass('nasa-tlx');
				//	  });
				//  </script>
				optimizeNASATLX();
				
				//Optimize Self-Assessment Manikin (SAM) Scales
				//Add this JavaScript code to the question that contains a SAM scale:
				//  <script type="text/javascript">	
				//	  bfls(document).ready(function(){ 
				//	  bfls('#question{QID}').addClass('sam');
				//	  });
				//  </script>
				optimizeSAM();
	
				//Reset form
				setupResetForm();
	
				//Privacy info
				setupPrivacyInfo();
	
				//Save form
				setupSaveForm();
	
				//Load form
				setupLoadForm();
	
				//Registration form
				setupRegistrationForm();
	
				//Surveylist
				setupSurveylist();
				
				//Error messages, e.g., survey has expired
				setupTokenMessage();
	
				//Show page after everything has been rendered
				bfls('.bflsMainContent').show();
				if (bfls('.errormandatory').length > 0) {
					bfls('html, body').animate({
						scrollTop: $(".errormandatory").parent().parent().parent().parent().offset().top - 50
					}, 0);
				} else {
					bfls('html, body').animate({
						scrollTop: 1
					}, 0);
				}
			});
		} else {
			waitForBfls();
		}
	}, 100);
})();

function fixUi() {
	value = bfls('#moveprevbtn').text();
	disabled = (bfls('#moveprevbtn').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#moveprevbtn').replaceWith('<button type="submit" id="moveprevbtn" value="moveprev" name="moveprev" accesskey="p" class="submit btn btn-default navbar-btn" role="button" '+ disabled +'>'+ value +'</button>');
	
	value = bfls('#movenextbtn').text();
	disabled = (bfls('#movenextbtn').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#movenextbtn').replaceWith('<button type="submit" id="movenextbtn" value="movenext" name="movenext" accesskey="n" class="submit btn btn-default btn-primary navbar-btn" role="button" '+ disabled +'>'+ value +'</button>');
	
	value = bfls('#movesubmitbtn').text();
	disabled = (bfls('#movesubmitbtn').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#movesubmitbtn').replaceWith('<button type="submit" id="movesubmitbtn" value="movesubmit" name="movesubmit" accesskey="l" class="submit btn btn-default btn-success navbar-btn" role="button" '+ disabled +'>'+ value +'</button>');

	if (bfls(':button[value="movesubmit"][name="move"]').length > 0) {
		value = bfls(':button[value="movesubmit"][name="move"]').eq(0).text();
		disabled = (bfls(':button[value="movesubmit"][name="move"]').eq(0).attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
		bfls(':button[value="movesubmit"][name="move"]').replaceWith('<button type="submit" value="movesubmit" name="move" class="submit btn btn-default btn-success btn-block" role="button" '+ disabled +'>'+ value +'</button>');
	}
	
	/*
	value  = bfls('a.clearall span').text();
	tmp2 = bfls('a.clearall').attr('href');
	tmp3 = bfls('a.clearall').attr('title');
	bfls('a.clearall').replaceWith('<a href="'+ tmp2 +'" class="clearall btn btn-default navbar-btn" title="'+ tmp3 +'" role="button">'+ value +'</a>');
	bfls('a.clearall').click(function(event){
		event.preventDefault();
		confirm(tmp3);
	});
	*/
	value = bfls('#clearall').text();
	disabled = (bfls('#clearall').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#clearall').replaceWith('<button type="submit" id="clearall" value="clearall" name="clearall" class="clearall btn btn-default navbar-btn" role="button" data-confirmedby="confirm-clearall" '+ disabled +'>'+ value +'</button>');
	
	value = bfls('#loadallbtn').text();
	disabled = (bfls('#loadallbtn').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#loadallbtn').replaceWith('<button type="submit" id="loadallbtn" value="loadall" name="loadall" class="saveall btn btn-default navbar-btn" role="button" '+ disabled +'>'+ value +'</button>');
	
	value = bfls('#saveallbtn').text();
	disabled = (bfls('#saveallbtn').attr('aria-disabled')=='true')?'disabled aria-disabled="true"':'aria-disabled=false';
	bfls('#saveallbtn').replaceWith('<button type="submit" id="saveallbtn" value="saveall" name="saveall" class="saveall btn btn-default navbar-btn" role="button" '+ disabled +'>'+ value +'</button>');
	
	bfls(':button').addClass('btn btn-default');
	bfls('select').addClass('form-control');
	bfls('textarea').addClass('form-control');
	
	bfls('.languagechanger').addClass('navbar-btn');
	
	bfls('.navbar-header.pull-left').css('padding-top', '0px');
	bfls('.navbar-toggle').css('z-index', '9999');
	bfls('.navbar :button').addClass('navbar-btn');
	
	bfls('p.error').replaceWith('<p class="text-warning">'+bfls('p.error').html()+'</p>');
}

function setupProgressbar() {
	bfls('#progress-wrapper').hide();
	(function updateProgressbar(n){
		setTimeout(function(){
			if (bfls('#progress-wrapper #progressbar').hasClass('ui-progressbar')) {
				progressBarValue = bfls('#progress-wrapper #progressbar').attr('aria-valuenow');
				
				bfls('.progress .progress-bar').attr('aria-valuenow', progressBarValue);
				bfls('.progress .progress-bar').css('width', progressBarValue+'%');
				bfls('.progress .progress-bar span.sr-only').html(progressBarValue+'% Complete');
				if (progressBarValue > 0) {
					bfls('.progress .progress-bar').append('<span>'+ progressBarValue +'%</span>');
				}
				
        function update() {
          bfls('body').css('padding-top', bfls('div.navbar').height() + 20);
        }
        bfls(window).resize(function () {
          update();
        });      
        update();  
        
				bfls('.progress').show();
				
				if (bfls('#index').length > 0) {
					bfls('#index').css('padding-top', '40px');
				}
			} else {
				if (n>0) updateProgressbar(--n);
			}
		}, 10);
	})(4);
}

function setupQuestionIndex() {
	if (bfls('#index').length > 0) {
		bfls('#limesurvey').unwrap();
		bfls('#limesurvey').children().wrapAll('<div class="col-md-8 content-col"></div>');
		bfls('#limesurvey .content-col').after('<div class="col-md-4 index-col"></div>');
		bfls('#index').appendTo('.index-col');
		bfls('#index h2').replaceWith('<h1>'+ bfls('#index h2').html() +'</h1>');
		bfls('#index .container').addClass('panel-body').removeClass('container').wrap('<div class="panel panel-default"></div>');
		bfls('#index div div.row').removeClass('row');
		bfls('#index div div ol li.row').removeClass('row');
		bfls('#index div div ol li').addClass('text-success');
		bfls('#index div div ol li.missing').removeClass('text-success').addClass('text-muted');
		bfls('#index div div ol li.current').removeClass('text-success').removeClass('text-danger').addClass('text-primary');
		bfls('#index .hdr').append('. ');
		bfls('#index span').addClass('text-success');
		bfls('#index .current span').removeClass('text-success').addClass('text-primary');
		bfls('#index .current span').next().removeClass('text-success').addClass('text-primary');
		bfls('#index input').hide();
		
		// Prevent the user from jumping around in a survey if question index mode is set to "complete",
		// since this appears to be buggy in LimeSurvey 2.05+.
		// bfls('#index button').remove();
	}
}

function setupQuestionGroups() {
	//bfls('.group .panel-body br').remove();
	//bfls('.group :nth-child(n) span').removeAttr('style');
	bfls('.group :nth-child(n) span').css('font', '').css('font-family', '').css('font-variant', '').css('font-size', '').css('font-stretch', '');
	
	if (bfls('.group .question-number').html()) {
		bfls('.group .question-number').append('. ');
	}
	if (bfls('.group .question-code').html()) {
		bfls('.group .question-code').addClass('badge');
	}
}

function setupAnswers() {
	bfls('.answer .tip').addClass('text-muted small');
	bfls('.answer .answer ul').addClass('list-unstyled');
	
    bfls('.answer .answer ul').each(function(index) {
        if (bfls(this).closest('.ranking-answers').length == 0) {
            if (bfls('.answer .answer ul').eq(index).children('li').length < 13) {
                columnWidth = Math.floor(12/bfls('.answer .answer ul').eq(index).children('li').length);
            } else {
                columnWidth = 12;
            }
            
            if (bfls('.answer .answer ul').hasClass('slider-list')) {
              columnWidth = 12;
            }

            bfls('.answer .answer ul').eq(index).children().wrapAll('<div class="row"></div>');
            bfls('.answer .answer ul').eq(index).find('div li').wrap('<div class="col-md-'+ columnWidth +'"></div>');       
        }
    });
	
	bfls('.answer .radio-list .radio-item').each(function(index) {
		bfls('.answer .radio-list .radio-item').eq(index).children('label[for$="othertext"]').addClass("othertext");
		bfls('.answer .radio-list .radio-item').eq(index).children('input').removeAttr('class');
		bfls('.answer .radio-list .radio-item').eq(index).children('input').prependTo(bfls('.answer .radio-list .radio-item').eq(index).children('label[class!="othertext"]'));
		bfls('.answer .radio-list .radio-item').eq(index).children('label').wrap('<div class="radio" style="padding-right: 20px;"></div>')
	});
	bfls('.answer .radio-list .radio-item div.radio label.hide').contents().filter(function(){
		return this.nodeType == 3;
	}).remove();
	bfls('.answer .radio-list .radio-item div.radio label.hide input').unwrap();
	
	bfls('.answer input:text').addClass('form-control');
	bfls('.answer table').wrap('<div class="table-responsive"></div>');
	bfls('.answer table').addClass('table table-striped table-hover table-condensed');
	bfls('.answer table thead tr td').replaceWith('<th>&nbsp;</th>');
	bfls('.survey-question-help > img').replaceWith('<span class="glyphicon glyphicon-info-sign pull-left">&nbsp;</span>');
	
	bfls('.answer strong .errormandatory').unwrap();
	bfls('.answer .errormandatory').addClass('text-danger');
	bfls('.answer .text-danger br').remove();

	/*
	if (bfls('.answer .text-danger strong').length > 0) {
		bfls('.answer .text-danger strong').each(function(index){
			// This does not work, do not uncomment without adjustment.
			bfls('.answer .text-danger').append(bfls('.answer .text-danger strong span').html());
			bfls('.answer .text-danger strong').remove();
		});
	}
	*/
	
	/*
	(function fixEmoticons(n){
		setTimeout(function(){
			if (bfls('.emoticon-2').length > 0) {
				bfls('.emoticon-2').css('margin-top', '0px');
			} else {
				if (n>0) fixEmoticons(--n);
			}
		}, 500);
	})(4);
	
	
	(function fixSlider(n){
		setTimeout(function(){
			if (bfls('.slider-labels').length > 0) {
				bfls('.slider-labels').css('margin-bottom', '15px');
				bfls('.slider-labels').css('margin-left', '12px');
			} else {
				if (n>0) fixSlider(--n);
			}
		}, 500);
	})(4);
	
	
	(function updateDatepicker(n){
		setTimeout(function(){
			if (bfls('.ui-datepicker-trigger').length > 0) {
				bfls('.ui-datepicker-trigger').hide();
			} else {
				if (n>0) updateDatepicker(--n);
			}
		}, 500);
	})(4);	
	*/
	
	
	if (bfls('.upload').length > 0) {
		bfls('.upload').unwrap('<h2>');
		bfls('.upload').addClass('btn btn-primary');
	}
	
	if (bfls('.subquestions-list').length > 0) {
		bfls('.subquestions-list li').each(function(index){
			bfls('.subquestions-list li').eq(index).children('input').appendTo(bfls('.subquestions-list li').eq(index).children('label'));
			bfls('.subquestions-list li').eq(index).children('label[class!="slider-label"]').wrap('<div class="checkbox"></div>');
			
			bfls('.subquestions-list li').eq(index).find('span.option input').prependTo(bfls('.subquestions-list li').eq(index).children('span.option').children('label'));
			bfls('.subquestions-list li').eq(index).find('span.option label').wrap('<div class="checkbox"></div>');
		});
	}
   
  bfls('.answer ul.slider-list li').each(function(index){
    if (bfls('.answer ul.slider-list li').eq(index).children('.slider-label').length > 0) {
      bfls('.answer ul.slider-list li').eq(index).children('div.multinum-slider').wrap('<div class="row multinum-slider"><div class="col-xs-8"></div></div>');
      bfls('.answer ul.slider-list li').eq(index).children('.row.multinum-slider').prepend(bfls('.answer ul.slider-list li').eq(index).children('.slider_lefttext'));
      bfls('.answer ul.slider-list li').eq(index).find('.row.multinum-slider .slider_lefttext').wrap('<div class="col-xs-2" style="padding-top: 15px; text-align: right;"></div>');                                                     
      bfls('.answer ul.slider-list li').eq(index).children('.row.multinum-slider').append(bfls('.answer ul.slider-list li').eq(index).children('.slider_righttext'));
      bfls('.answer ul.slider-list li').eq(index).find('.row.multinum-slider .slider_righttext').wrap('<div class="col-xs-2" style="padding-top: 15px; text-align: left;"></div>');      
    }
  }); 
}

function setupResetForm() {
	bfls('.clearall-results-restart a').addClass('btn btn-primary btn-lg');
	bfls('.clearall-results-close a').addClass('btn btn-danger btn-lg');
}

function setupPrivacyInfo() {
	bfls('div.privacy .panel-heading h3').html(bfls('div.privacy .panel-body span').html());
	bfls('div.privacy .panel-body span').remove();
	bfls('div.privacy .panel-body br').remove();
	privacyTmp = bfls('div.privacy .panel-body').html();
	bfls('div.privacy .panel-body').empty();
	bfls('div.privacy .panel-body').append('<p>'+ privacyTmp +'</p>');
}

function setupSaveForm() {
	bfls('.save-form input:text').addClass('form-control');
	bfls('.save-form input:password').addClass('form-control');
	bfls('.save-form #savebutton').addClass('btn btn-primary');
	bfls('.save-form').after('<div class="save-form-bootstrap"></div>');
	bfls('.save-form tr').each(function(index) {
		labelTmp = bfls('.save-form tr').eq(index).children('td').eq(0).html().slice(0, -1);
		fieldTmp = bfls('.save-form tr').eq(index).children('td').eq(1).html();
		if (labelTmp.indexOf('<img') == -1 && fieldTmp) {
			bfls('.save-form-bootstrap').append('<div class="form-group group'+ index +'"></div>');
			bfls('.save-form-bootstrap .form-group.group'+index).append(labelTmp);
			bfls('.save-form-bootstrap .form-group.group'+index).append(fieldTmp);
		}
	});
	bfls('.save-form').remove();
}

function setupLoadForm() {
	bfls('.load-form input:text').addClass('form-control');
	bfls('.load-form input:password').addClass('form-control');
	bfls('.load-form #loadbutton').addClass('btn btn-primary');
	bfls('.load-form').after('<div class="load-form-bootstrap"></div>');
	bfls('.load-form tr').each(function(index) {
		labelTmp = bfls('.load-form tr').eq(index).children('td').eq(0).html().slice(0, -1);
		fieldTmp = bfls('.load-form tr').eq(index).children('td').eq(1).html();
		if (labelTmp.indexOf('<img') == -1 && fieldTmp) {
			bfls('.load-form-bootstrap').append('<div class="form-group group'+ index +'"></div>');
			bfls('.load-form-bootstrap .form-group.group'+index).append(labelTmp);
			bfls('.load-form-bootstrap .form-group.group'+index).append(fieldTmp);
		}
	});
	bfls('.load-form').remove();
}

function setupRegistrationForm() {
	bfls('.register-form input:text').addClass('form-control');
	bfls('.register-form input:password').addClass('form-control');
	bfls('.register-form #registercontinue').addClass('btn btn-primary');
	bfls('.register-form form').append('<div class="register-form-bootstrap"></div>');
	bfls('.register-form tr').each(function(index) {
		labelTmp = bfls('.register-form tr').eq(index).children('td').eq(0).html().slice(0, -1);
		fieldTmp = bfls('.register-form tr').eq(index).children('td').eq(1).html();
		if (labelTmp.indexOf('<img') == -1 && fieldTmp) {
			bfls('.register-form-bootstrap').append('<div class="form-group group'+ index +'"></div>');
			bfls('.register-form-bootstrap .form-group.group'+index).append(labelTmp);
			bfls('.register-form-bootstrap .form-group.group'+index).append(fieldTmp);
		}
	});
	bfls('.register-form table.register').remove();
}

function setupSurveylist() {
	if (bfls('.survey-list-table .survey-contact').length > 0) {
		bfls('.survey-list-table .survey-contact').html(bfls('.survey-list-table .survey-contact').html().replace('( ', '(').replace(' )', ')'));
	}
}

function setupTokenMessage() {
	if (bfls('p#tokenmessage').length > 0) {
		bfls('p#tokenmessage').wrap('<div class="well"></div>');
		bfls('p#tokenmessage span.error').replaceWith('<h1>'+ bfls('p#tokenmessage span.error').html() +'</h1>');
		bfls('p#tokenmessage h1 + br').remove();
		bfls('p#tokenmessage h1 + br').remove();
		bfls('p#tokenmessage br + br').remove();
		
		bfls('p#tokenmessage').html(bfls('p#tokenmessage').html().replace('( ', '(').replace(' )', ')'));
	}
}

function setupAlertDialog() {
	window.alert = function(message) {
		console.log(message);
		id = new Date().getTime();
		bfls('body').append(' \
			<div class="modal fade" id="alertModal'+ id +'"> \
			  <div class="modal-dialog"> \
			    <div class="modal-content"> \
			      <div class="modal-header"> \
			        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
			        <h4 class="modal-title">Info</h4> \
			      </div> \
			      <div class="modal-body"> \
			        <p>'+ message +'</p> \
			      </div> \
			      <div class="modal-footer"> \
			        <button type="button" class="btn btn-default" data-dismiss="modal">Okay</button> \
			      </div> \
			    </div><!-- /.modal-content --> \
			  </div><!-- /.modal-dialog --> \
			</div><!-- /.modal --> \
		');
		bfls('#alertModal'+id).modal('show');
	};
}

function setupConfirmDialog() {
	window.confirm = function(message) {
		console.log(message);
		id = new Date().getTime();
		bfls('body').append(' \
			<div class="modal fade" id="alertModal'+ id +'"> \
			  <div class="modal-dialog"> \
			    <div class="modal-content"> \
			      <div class="modal-header"> \
			        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
			        <h4 class="modal-title">Mhh...</h4> \
			      </div> \
			      <div class="modal-body"> \
			        <p>'+ message +'</p> \
			      </div> \
			      <div class="modal-footer"> \
			        <button type="button" class="btn btn-default" data-dismiss="modal">&nbsp;&nbsp;<span class="glyphicon glyphicon-thumbs-down"></span>&nbsp;&nbsp;</button> \
							<button type="button" class="btn btn-primary" onclick="window.location=\'index/sid/'+ bfls('#sid').attr('value') +'/newtest/Y\';">&nbsp;&nbsp;<span class="glyphicon glyphicon-thumbs-up"></span>&nbsp;&nbsp;</button> \
			      </div> \
			    </div><!-- /.modal-content --> \
			  </div><!-- /.modal-dialog --> \
			</div><!-- /.modal --> \
		');
		bfls('#alertModal'+id).modal('show');
	};
}

function optimizeSemanticDifferential() {
	bfls('.semanticDifferential table').removeClass('table-hover');
	bfls('.semanticDifferential table').each(function(index) {
		if (bfls('.semanticDifferential table').eq(index).find('tbody tr').length == 1) {
			bfls('.semanticDifferential table').eq(index).removeClass('table-striped');
		}	
	});	
	bfls('.semanticDifferential table thead th').remove();
	bfls('.semanticDifferential table th').css('border', '0px solid black');
	bfls('.semanticDifferential table td').css('border', '0px solid black')
										  .css('vertical-align', 'middle');
	bfls('.semanticDifferential div.radio').css('text-align', 'center')
										   .css('padding-left', '0px')
										   .css('padding-right', '0px');										   
	bfls('.semanticDifferential input[type="radio"]').css('display', 'block').css('margin', '').css('margin', 'auto').css('float', 'none');
}

function optimizeLikert() {
	function enable() {
	bfls('.likert div.radio').css('text-align', 'center');
	bfls('.likert input[type="radio"]').css('display', 'block').css('margin', '').css('margin', 'auto').css('float', 'none');
	}

	function disable() {
	bfls('.likert div.radio').css('text-align', 'left');
	bfls('.likert input[type="radio"]').css('display', 'inline').css('margin', '').css('margin-left', '-20px').css('float', 'left');
	}

	function update() {
	if(isBreakpoint('sm') || isBreakpoint('xs')) {
	  disable();
	} else {
	  enable();
	}
	}

	function isBreakpoint( alias ) {
	return bfls('.device-' + alias).is(':visible');
	}

	bfls(window).resize(function () {
	update();
	});

	bfls('body').append('<div class="device-xs visible-xs"></div><div class="device-sm visible-sm"></div><div class="device-md visible-md"></div><div class="device-lg visible-lg"></div>');
	update();
}

function optimizeNASATLX() {
	bfls('.nasa-tlx .ui-slider').css('background', 'url('+BFLS_TEMPLATEURL+'images/nasa-tlx-background.png)')
								.css('background-size', '100% 40px')																
								.css('height', '40px')
								.css('border', '0px solid black')
								.css('top', '-20px');
	bfls('.nasa-tlx .ui-slider .ui-slider-handle').css('height', '40px')
												  .css('top', '0px')
												  .css('border', '0px solid black')
												  .css('background', 'red');
	bfls('.nasa-tlx .ui-slider .slider-callout').css('visibility', 'hidden');
}

function optimizeSAM() {
	bfls('.sam colgroup').remove();
	bfls('.sam thead').remove();
	bfls('.sam th.answertext').remove();
	bfls('.sam table').removeClass('table-striped')
					  .removeClass('table-hover');
	bfls('.sam table td').css('border', '0px solid black');
	bfls('.sam thead img').remove();	
	bfls('.sam tbody div.radio').css('text-align', 'center');
	bfls('.sam tbody div.radio').each(function(index) {
		bfls('.sam tbody div.radio').eq(index).children('input').insertAfter(bfls('.sam tbody div.radio').eq(index).children('img'));
	});
	bfls('.sam tbody div.radio img').css('padding-bottom', '10px')
									.css('width', '100%') //http://stackoverflow.com/questions/18846744/responsive-images-in-tables-bootstrap-3
									.addClass('img-responsive');
	bfls('.sam tbody input[type="radio"]').css('float', 'none')
										  .css('display', 'block')
										  .css('margin', 'auto');
}

