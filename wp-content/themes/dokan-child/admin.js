 function openUser(){
	 //alert("test");
		jQuery.confirm({
					title: '',
					columnClass: 'class_name',
					closeIcon: true, // hides the close icon.
					content: '<div class="wpforms-container wpforms-container-full" id="wpforms-185"> <form id="wpforms-form-185" class="wpforms-validate wpforms-form" data-formid="185" method="post" enctype="multipart/form-data" action="#" novalidate> <div class="wpforms-field-container"> <div id="wpforms-185-field_1-container" class="wpforms-field wpforms-field-name check_name" data-field-id="1"> <label class="wpforms-field-label" for="wpforms-185-field_1">Name <span class="wpforms-required-label">*</span></label> <div class="wpforms-field-row wpforms-field-large"> <div class="wpforms-field-row-block wpforms-first wpforms-one-half"> <input type="text" id="wpforms-185-field_1" class="wpforms-field-name-first wpforms-field-required" name="wpforms[fields][1][first]" required aria-required="true"> <label for="wpforms-185-field_1" class="wpforms-field-sublabel after ">First</label> </div> <div class="wpforms-field-row-block wpforms-one-half"> <input type="text" id="wpforms-185-field_1-last" class="wpforms-field-name-last wpforms-field-required" name="wpforms[fields][1][last]" required aria-required="true"> <label for="wpforms-185-field_1-last" class="wpforms-field-sublabel after ">Last</label> </div> </div> </div> <div id="wpforms-185-field_3-container" class="wpforms-field wpforms-field-email wpforms-one-half wpforms-first" data-field-id="3"> <label class="wpforms-field-label" for="wpforms-185-field_3">Email <span class="wpforms-required-label">*</span></label> <input type="email" id="wpforms-185-field_3" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][3]" required aria-required="true"> </div> <div id="wpforms-185-field_4-container" class="wpforms-field wpforms-field-password wpforms-one-half" data-field-id="4"> <label class="wpforms-field-label" for="wpforms-185-field_4">Password <span class="wpforms-required-label">*</span></label> <input type="password" id="wpforms-185-field_4" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][4]" required aria-required="true"> <span toggle="#wpforms-185-field_4" class="fa fa-fw fa-eye field-icon toggle-password wpform-password"></span> <div class="wpforms-field-description"><span class="password_tooltip" title="">i</span></div> </div> <div id="wpforms-185-field_22-container" class="wpforms-field wpforms-field-text wpforms-one-half wpforms-first mytooltip" data-field-id="22"> <label class="wpforms-field-label" for="wpforms-185-field_22">Street&lt;!-- &lt;span class="tooltips" title="Address provided will be within 50 miles of participating dentists."&gt;i&lt;/span&gt;--&gt; <span class="wpforms-required-label">*</span></label> <label class="Array" for="wpforms-185-field_22">Street<!-- <span class="tooltips" title="Address provided will be within 50 miles of participating dentists.">i</span>--> <span class="wpforms-required-label">*</span></label> <input type="text" id="wpforms-185-field_22" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][22]" required aria-required="true"> </div> <div id="wpforms-185-field_23-container" class="wpforms-field wpforms-field-text wpforms-one-half" data-field-id="23"> <label class="wpforms-field-label" for="wpforms-185-field_23">Apt. #</label> <input type="text" id="wpforms-185-field_23" class="wpforms-field-medium" name="wpforms[fields][23]"> </div> <div id="wpforms-185-field_24-container" class="wpforms-field wpforms-field-text wpforms-one-third wpforms-first" data-field-id="24"> <label class="wpforms-field-label" for="wpforms-185-field_24">City <span class="wpforms-required-label">*</span></label> <input type="text" id="wpforms-185-field_24" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][24]" required aria-required="true"> </div> <div id="wpforms-185-field_25-container" class="wpforms-field wpforms-field-select wpforms-one-third" data-field-id="25"> <label class="wpforms-field-label" for="wpforms-185-field_25">State <span class="wpforms-required-label">*</span></label> <select name="wpforms[fields][25]" id="wpforms-185-field_25" class="wpforms-field-medium wpforms-field-required" required="" aria-required="true"> <option value="" class="placeholder" disabled="" selected="selected">- Select State -</option> <option value="Alabama">Alabama</option> <option value="Alaska">Alaska</option> <option value="Arizona">Arizona</option> <option value="Arkansas">Arkansas</option> <option value="California">California</option> <option value="Colorado">Colorado</option> <option value="Connecticut">Connecticut</option> <option value="Delaware">Delaware</option> <option value="District of Columbia">District of Columbia</option> <option value="Florida">Florida</option> <option value="Georgia">Georgia</option> <option value="Hawaii">Hawaii</option> <option value="Idaho">Idaho</option> <option value="Illinois">Illinois</option> <option value="Indiana">Indiana</option> <option value="Iowa">Iowa</option> <option value="Kansas">Kansas</option> <option value="Kentucky">Kentucky</option> <option value="Louisiana">Louisiana</option> <option value="Maine">Maine</option> <option value="Maryland">Maryland</option> <option value="Massachusetts">Massachusetts</option> <option value="Michigan">Michigan</option> <option value="Minnesota">Minnesota</option> <option value="Mississippi">Mississippi</option> <option value="Missouri">Missouri</option> <option value="Montana">Montana</option> <option value="Nebraska">Nebraska</option> <option value="Nevada">Nevada</option> <option value="New Hampshire">New Hampshire</option> <option value="New Jersey">New Jersey</option> <option value="New Mexico">New Mexico</option> <option value="New York">New York</option> <option value="North Carolina">North Carolina</option> <option value="North Dakota">North Dakota</option> <option value="Ohio">Ohio</option> <option value="Oklahoma">Oklahoma</option> <option value="Oregon">Oregon</option> <option value="Pennsylvania">Pennsylvania</option> <option value="Rhode Island">Rhode Island</option> <option value="South Carolina">South Carolina</option> <option value="South Dakota">South Dakota</option> <option value="Tennessee">Tennessee</option> <option value="Texas">Texas</option> <option value="Utah">Utah</option> <option value="Vermont">Vermont</option> <option value="Virginia">Virginia</option> <option value="Washington">Washington</option> <option value="West Virginia">West Virginia</option> <option value="Wisconsin">Wisconsin</option> <option value="Wyoming">Wyoming</option> <option value="Armed Forces Americas">Armed Forces Americas</option> <option value="Armed Forces Europe">Armed Forces Europe</option> <option value="Armed Forces Pacific">Armed Forces Pacific</option> </select> </div> <div id="wpforms-185-field_26-container" class="wpforms-field wpforms-field-text wpforms-one-third" data-field-id="26"> <label class="wpforms-field-label" for="wpforms-185-field_26">Zip Code <span class="wpforms-required-label">*</span></label> <input type="text" id="wpforms-185-field_26" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][26]" required aria-required="true"> </div> <div id="wpforms-185-field_28-container" class="wpforms-field wpforms-field-phone wpforms-one-half wpforms-first" data-field-id="28"> <label class="wpforms-field-label" for="wpforms-185-field_28">Mobile <span class="wpforms-required-label">*</span></label> <input type="tel" id="wpforms-185-field_28" class="wpforms-field-medium wpforms-field-required wpforms-masked-input"  name="wpforms[fields][28]" required aria-required="true"> </div> <div id="wpforms-185-field_39-container" class="wpforms-field wpforms-field-phone wpforms-one-half" data-field-id="39"> <label class="wpforms-field-label" for="wpforms-185-field_39">Home </label> <input type="tel" id="wpforms-185-field_39" class="wpforms-field-medium wpforms-masked-input"name="wpforms[fields][39]"> </div> </div> </form></div>',
					buttons: {
						Yes: {
							text: "OK",
						   	//btnClass: 'btn-blue',
							keys: ['enter'],
							action: function(){
							}
						}
					}
				});
		
	}