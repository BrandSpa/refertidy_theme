<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RentAdvisor</title>
	<style>
		@keyframes slideModel {
			from {
				transform: scale(1.1) translate3d(50px, 0, 0);
			}

			to {
				transform: scale(1) translate3d(0, 0, 0);
			}
		}

		@keyframes slideObject {
			from {
				transform: scale(1.1) translate3d(0, -20px, 0);
			}

			to {
				transform: scale(1) translate3d(0, 0, 0);
			}
		}


		.slider__slide--active .slider__slide__model {
			animation: slideModel 2s;
		}

		.slider__slide--active .slider__slide__object {
			animation: slideObject 3s;
		}

		#app-header {
			position: fixed;
			top: 0;
			width: 100%;
			height: 400px;
			background: rgba(255, 255, 255, 0.01);
		}
	</style>
</head>
<body>
	
<header id="app-header">
	<img src="<?php echo get_template_directory_uri() ?>/imgs/logo.svg" alt="">
	<ul></ul>
</header>

