import React from 'react'

export const Footer = () => {
  return (
    <footer className="custom-footer">
		<div className="container">
			<div className="footer-inner custom-justify-align-items">
				<div className="footer-column text-left">
					<p>@2021-2024. All rights reserved</p>
				</div>
				<div className="footer-column text-center">
					<p>SecureSign by Tenet Crypto Lab</p>
				</div>
				<div className="footer-column text-right">
					<ul>
						<li><a href="#">Cookies</a>  <a href="#">Privacy & Policy</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
  )
}
