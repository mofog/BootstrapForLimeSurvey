/*
*
*	BootstrapForLimeSurvey
*	A Responsive LimeSurvey Template Based On Bootstrap
*	(c) 2013 mofog (http://mofog.github.io/BootstrapForLimeSurvey)
*
*/

(function waitForBfls(){
	setTimeout(function(){
		if (!(typeof bfls === 'undefined')) {
			bfls(document).ready(function(){	
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
	
				//Show page after everything has been rendered
				bfls('.bflsMainContent').show();
			});
		} else {
			waitForBfls();
		}
	}, 10);
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
	
	value  = bfls('a.clearall span').text();
	tmp2 = bfls('a.clearall').attr('href');
	tmp3 = bfls('a.clearall').attr('title');
	bfls('a.clearall').replaceWith('<a href="'+ tmp2 +'" class="clearall btn btn-default navbar-btn" title="'+ tmp3 +'" role="button">'+ value +'</a>');
	bfls('a.clearall').click(function(event){
		event.preventDefault();
		confirm(tmp3);
	});
	
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
	(function updateProgressbar(){
		setTimeout(function(){
			if (bfls('#progress-wrapper #progressbar').hasClass('ui-progressbar')) {
				progressBarValue = bfls('#progress-wrapper #progressbar').attr('aria-valuenow');
				
				bfls('.progress .progress-bar').attr('aria-valuenow', progressBarValue);
				bfls('.progress .progress-bar').css('width', progressBarValue+'%');
				bfls('.progress .progress-bar span.sr-only').html(progressBarValue+'% Complete');
				if (progressBarValue > 0) {
					bfls('.progress .progress-bar').append('<span>'+ progressBarValue +'%</span>');
				}
				
				bfls('.progress').show();
				
				if (bfls('#index').length > 0) {
					bfls('#index').css('padding-top', '40px');
				}
			} else {
				updateProgressbar();
			}
		}, 10);
	})();
}

function setupQuestionIndex() {
	if (bfls('#index').length > 0) {
		bfls('body .container .row .content-col').addClass('col-md-8');
		bfls('body .container .row .content-col').removeClass('col-md-12');
		bfls('body .container .row .content-col').after('<div class="col-md-4 index-col"></div>');
		bfls('#index').appendTo('.index-col');
		bfls('#index h2').replaceWith('<h1>'+ bfls('#index h2').html() +'</h1>');
		bfls('#index .container').addClass('panel-body').removeClass('container').wrap('<div class="panel panel-default"></div>');
		bfls('#index div div.row').removeClass('row');
		bfls('#index .hdr').append('. ');
		bfls('#index span').addClass('text-muted');
		bfls('#index .current span').addClass('text-primary');
		bfls('#index .current span').next().addClass('text-primary');
		bfls('#index input').hide();
	}
}

function setupQuestionGroups() {
	bfls('.group :nth-child(n) span').removeAttr('style');
	bfls('.group .panel-body br').remove();
	
	if (bfls('.group .question-number').html()) {
		bfls('.group .question-number').append('. ');
	}
	if (bfls('.group .question-code').html()) {
		bfls('.group .question-code').addClass('badge');
	}
}

function setupAnswers() {
	bfls('.answer .tip').addClass('text-muted small');
	bfls('.answer ul').addClass('list-unstyled');
	
	bfls('.answer ul').each(function(index) {
		if (bfls('.answer ul').eq(index).children('li').length < 13) {
			columnWidth = Math.floor(12/bfls('.answer ul').eq(index).children('li').length);
		} else {
			columnWidth = 12;		
		}
		
		bfls('.answer ul').eq(index).children().wrapAll('<div class="row"></div>');
		bfls('.answer ul').eq(index).children('div').children('li').wrap('<div class="col-md-'+ columnWidth +'"></div>');	
	});
	
	bfls('.answer .radio-list .radio-item').each(function(index) {
		bfls('.answer .radio-list .radio-item').eq(index).children('input').removeAttr('class');
		bfls('.answer .radio-list .radio-item').eq(index).children('input').prependTo(bfls('.answer .radio-list .radio-item').eq(index).children('label'));
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
	
	if (bfls('.answer .text-danger strong').length > 0) {
		bfls('.answer .text-danger').append(bfls('.answer .text-danger strong span').html());
		bfls('.answer .text-danger strong').remove();
	}
	
	(function fixEmoticons(){
		setTimeout(function(){
			if (bfls('.emoticon-2').length > 0) {
				bfls('.emoticon-2').css('margin-top', '0px');
			} else {
				fixEmoticons();
			}
		}, 10);
	})();
	
	(function fixSlider(){
		setTimeout(function(){
			if (bfls('.slider-labels').length > 0) {
				bfls('.slider-labels').css('margin-bottom', '15px');
				bfls('.slider-labels').css('margin-left', '12px');
			} else {
				fixSlider();
			}
		}, 10);
	})();
	
	(function updateDatepicker(){
		setTimeout(function(){
			if (bfls('.ui-datepicker-trigger').length > 0) {
				bfls('.ui-datepicker-trigger').hide();
			} else {
				updateDatepicker();
			}
		}, 10);
	})();	
	
	if (bfls('.upload').length > 0) {
		bfls('.upload').unwrap('<h2>');
		bfls('.upload').addClass('btn btn-primary');
	}
	
	if (bfls('.subquestions-list').length > 0) {
		bfls('.subquestions-list li').each(function(index){
			bfls('.subquestions-list li').eq(index).children('input').prependTo(bfls('.subquestions-list li').eq(index).children('label'));
			bfls('.subquestions-list li').eq(index).children('label[class!="slider-label"]').wrap('<div class="checkbox"></div>');
			
			bfls('.subquestions-list li').eq(index).children('span.option').children('input').prependTo(bfls('.subquestions-list li').eq(index).children('span.option').children('label'));
			bfls('.subquestions-list li').eq(index).children('span.option').children('label').wrap('<div class="checkbox"></div>');
		});
	}
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
			bfls('.save-form-bootstrap .form-group.group'+index).append('<label for="'+ labelTmp +'">'+ labelTmp +'</label>');
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
			bfls('.load-form-bootstrap .form-group.group'+index).append('<label for="'+ labelTmp +'">'+ labelTmp +'</label>');
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
			bfls('.register-form-bootstrap .form-group.group'+index).append('<label for="'+ labelTmp +'">'+ labelTmp +'</label>');
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

(function setupAlertDialog() {
	window.alert = function(message) {
		console.log(message);
		id = new Date().getTime();
		bfls('body').append(' \
			<div class="modal fade" id="alertModal'+ id +'"> \
			  <div class="modal-dialog"> \
			    <div class="modal-content"> \
			      <div class="modal-header"> \
			        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
			        <h4 class="modal-title">Sorry</h4> \
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
})();

(function setupConfirmDialog() {
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
							<button type="button" class="btn btn-primary" onclick="window.location=\''+ bfls('a.clearall').attr('href') +'\';">&nbsp;&nbsp;<span class="glyphicon glyphicon-thumbs-up"></span>&nbsp;&nbsp;</button> \
			      </div> \
			    </div><!-- /.modal-content --> \
			  </div><!-- /.modal-dialog --> \
			</div><!-- /.modal --> \
		');
		bfls('#alertModal'+id).modal('show');
	};
})();
