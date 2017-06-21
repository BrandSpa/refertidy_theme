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
				transform: scale(1.1) translate3d(-30px, 0, 0);
			}

			to {
				transform: scale(1) translate3d(0, 0, 0);
			}
		}

		@keyframes slideObject {
			from {
				transform: scale(1.1) translate3d(-70px, 0, 0);
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
	</style>
</head>
<body>
	
