<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly



/**

 * Auction won emails 

 *

 * Auction won emails are sent when a user wins the auction.

 * @class 		WC_Email_SA_Outbid

 * @extends 	WC_Email

 */



class WC_Email_SA_Auction_Win extends WC_Email {



	

	/** @var string */

	var $winning_bid;



	/** @var string */

	var $title;



	/** @var string */

	var $auction_id;

	

	/** @var string */

	var $checkout_url;

	

	



	/**

	 * Constructor

	 *

	 * @access public

	 * @return void

	 */

	function __construct() {

		

		global $woocommerce_auctions;



		$this->id 				= 'auction_win';

		$this->title 			= __( 'Auction Win', 'wc_simple_auctions' );

		$this->description		= __( 'Auction won emails are sent when a user wins the auction.', 'wc_simple_auctions' );

		$this->customer_email = true;

		$this->template_html 	= 'emails/auction_win.php';

		$this->template_plain 	= 'emails/plain/auction_win.php';

		$this->template_base	= $woocommerce_auctions->plugin_path. 'templates/';



		$this->subject 			= __( 'Auction won on {site_title}', 'wc_simple_auctions');

		$this->heading      	= __( 'You have won the auction!', 'wc_simple_auctions');

		

		$this->checkout_url 	= simple_auction_get_checkout_url();



		// Triggers

		//die(); 

		add_action( 'woocommerce_simple_auction_won_notification', array( $this, 'trigger' ) );



		// Call parent constructor



		parent::__construct();

	}



	/**

	 * trigger function.

	 *

	 * @access public

	 * @return void

	 */

	function trigger( $product_id ) {

		global $woocommerce;



		



		if ( ! $this->is_enabled())

			return;

		

		

		if ( $product_id ) {

				if( get_post_meta( $product_id , '_' . $this->id . '_email_sent' , true )){

					return;

				}	



				update_post_meta( $product_id , '_' . $this->id.'_email_sent' , '1' )	;



				$product_data = wc_get_product(  $product_id );

				$post_obj    = get_post($product_id); // The WP_Post object
   			 	$post_author = $post_obj->post_author;

				$customer_user = get_post_meta( $product_id, '_auction_current_bider', true ) ;



					if ( $product_data ) {



						if ( $customer_user ) {



							if(is_array($customer_user)){



								foreach ($customer_user as $key => $user) {

									$this->object 		= new WP_User( absint($user) );

									$this->recipient	= $this->object->user_email;

									$this->auction_id = $product_id;
									
									$author_email = get_the_author_meta( 'user_email',$post_author);
									$this->winning_bid = get_post_meta($product_id, '_auction_winning_bid_'.absint($user),true);
									$html_winner = '<img src="'.get_site_url().'/wp-content/themes/dokan-child/Winner-Dentist.gif" border="0" alt="" title="Winner-Dentist_title1_'.$author_email.'">';
									$html_congratulations = '<img src="'.get_site_url().'/wp-content/themes/dokan-child/Congratulations-Client.gif" border="0" alt="" title="Congratulations-Client_title2_'.$author_email.'">';
									//'<a href="'.home_url("/congratulations-video/").'" title="video">Click Here</a>'
									$this->send( $this->get_recipient(), $this->get_subject(),str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_winner,$this->get_content_html('dentist')))), $this->get_headers(), $this->get_attachments() );	
									//Mujahid Code
									$dentist_office_email = get_user_meta($this->object->ID, 'dentist_office_email', true );
									if($dentist_office_email !="" && $this->get_recipient() != $dentist_office_email){
										//$this->send($dentist_office_email, $this->get_subject(), str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_winner,$this->get_content_html('dentist')))), $this->get_headers(), $this->get_attachments() );	
									}
									$this->send($author_email, $this->get_subject(), str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_congratulations,$this->get_content_html('client')))), $this->get_headers(), $this->get_attachments() );


								}



							} else{

								$this->object 		= new WP_User( absint($customer_user) );

								$this->recipient	= $this->object->user_email;

								$this->auction_id = $product_id;
								
								$author_email = get_the_author_meta( 'user_email',$post_author);
								$this->winning_bid = $product_data->get_curent_bid();
								$html_winner = '<img src="'.get_site_url().'/wp-content/themes/dokan-child/Winner-Dentist.gif" border="0" alt="" title="Winner-Dentist_title3_'.$author_email.'">';
								$html_congratulations = '<img src="'.get_site_url().'/wp-content/themes/dokan-child/Congratulations-Client.gif" border="0" alt="" title="Congratulations-Client_title4_'.$author_email.'">';
								$this->send( $this->get_recipient(), $this->get_subject(),str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_winner,$this->get_content_html('dentist')))), $this->get_headers(), $this->get_attachments() );		
								//Mujahid Code
								$dentist_office_email = get_user_meta($this->object->ID, 'dentist_office_email', true );
								if($dentist_office_email !="" && $this->get_recipient() != $dentist_office_email){
									//$this->send($dentist_office_email, $this->get_subject(), str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_winner,$this->get_content_html('dentist')))), $this->get_headers(), $this->get_attachments() );		
								}
								$this->send($author_email, $this->get_subject(),str_replace('header_wrapper"','header_wrapper" style="padding:0px;"',str_replace("#96588a","none",str_replace("[video]",$html_congratulations,$this->get_content_html('client')))), $this->get_headers(), $this->get_attachments() );

								

							}	

						}

							

						

					}



			

		}	

		

		

		

		

		

		

		

	}



	/**

	 * get_content_html function.

	 *

	 * @access public

	 * @return string

	 */

	function get_content_html($type) {

		ob_start();
		if($type=='dentist'){
		wc_get_template( 	$this->template_html, array(

				'email_heading' 		=> $this->get_heading(),

				'blogname'				=> $this->get_blogname(),

				'current_bid' 			=> $this->winning_bid,
				
				'user_email' 			=> $this->recipient,
				
				'product_id'			=> $this->auction_id,

				'checkout_url'			=> $this->checkout_url,

				'email'			=> $this,

			) );
		}else{
			wc_get_template('emails/auction_win_client.php', array(

				'email_heading' 		=> $this->get_heading(),

				'blogname'				=> $this->get_blogname(),

				'current_bid' 			=> $this->winning_bid,
				
				'user_email' 			=> $this->recipient,
				
				'product_id'			=> $this->auction_id,

				'checkout_url'			=> $this->checkout_url,

				'email'			=> $this,

			) );
		}

		

		return ob_get_clean();

	}



	/**

	 * get_content_plain function.

	 *

	 * @access public

	 * @return string

	 */

	function get_content_plain() {

		ob_start();

		wc_get_template( $this->template_plain, array(

				'email_heading' 		=> $this->get_heading(),

				'blogname'				=> $this->get_blogname(),

				'current_bid' 			=> $this->winning_bid,

				'product_id'			=> $this->auction_id,

				'checkout_url'			=> $this->checkout_url,

				'email'			=> $this,

				

			) );

		return ob_get_clean();

	}

}