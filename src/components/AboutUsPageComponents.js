import React, { Component } from 'react';
import mainLogo from'../images/logo.png';
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';
class HeaderComponent extends Component{
    render() {
        return (
        <div>
       <HeaderComponents/>
      <div>
          
<article>
<section className="about-us-page text-center">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<h2>About us</h2>
				<img src="images/heading-flower.png" />
			</div>			
		</div>
	</div>
</section>

<section className="about-us-page">
	<div className="container">
	<div className="row">
			<div className="col-md-8">
				<p>Marriage also called matrimony or wedlock, is a socially or ritually recognized union between response that establish rights and obligations between them, their children and their in-laws.</p>
				<p>The definition of marriage varies according to different cultures but it is principally an institution in which interpersonal relationships are acknowledged. As Westermarck has remarked “marriage is rooted in the family rather than the family in the marriage’’,</p>
				<p>Now a days marriage is growing as a trend due to the changing rules and regulations, parental choice in the search of Bride/Bridegroom is diminishing.</p>
			</div>		
			<div className="col-md-4">
				<img className="about-img" height="300px" width="400px" src="images/about.jpg"/>
			</div>				
		</div>
	</div>
</section>

<section className="about-us-page">
	<div className="container">
	<div className="row">
			<div className="col-md-12">
				<p>This website namely, www.mymarathalagna.com with all the details of Bride/Bridegroom is a ready made help to the parents and the candidates, more particularly to all hindu religion subcastes. This site will help them to make their search easier to find a suitable partner.</p>
				<p>Today in Hindu Religion, Boys and Girls are receiving good education and have settled in good job. They have settled overseas which is the matter of pride to the community, but marriage has become a matter of tension to the parents. Earlier marriages were held traditionally, but today the situation is not the same. Today education, Employment, Business, Migration has become a obstacle to marriage</p>
				<p>This matrimonial site helps as an alternative as the traditional marriage broker and helps to seek a suitable bride/bridegroom according to the status respectively. The main motto of www.mymarathalagna.com is to help in uplifting the all hindu religion subcastes and culture. We take the responsibility of keeping the details personally and confidentially.</p>
			</div>			
		</div>
	</div>
</section>
</article>
      </div>
      <FooterComponents/>
        </div>)
        
    }

     
      
}
export default HeaderComponent;