<?php
$stocks = [
    [
        "image" => "../images/topics/sales_1.png",
        "title" => "Супер акция 2024!!!",
        "description" => "Дарим ЧЕСТНУЮ скидку 10% при заказе мебели в этом году с установкой в следующем! Все подробности в салоне у наших менеджеров."
    ],
    // Добавляйте новые акции здесь
];
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Art мебель">
    <link rel="shortcut icon" href="../favicon.png">
    <meta name="description" content="Акции и скидки на мебель в Томске от компании Art мебель. Выгодные предложения на изготовление мебели под заказ." />
    <meta name="keywords" content="акции мебель, скидки мебель, мебель томск, изготовление мебели, скидки на мебель, выгодные предложения мебель" />
    <meta property="og:title" content="Акции на мебель в г. Томске | Art мебель" />
    <meta property="og:description" content="Выгодные акции и скидки на мебель в Томске от компании Art мебель. Успейте заказать по специальным ценам." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://art-meb.com/stock" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="../css/tiny-slider.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <title>Акции на мебель в г. Томске | Art мебель</title>
</head>
<body>
    <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        <div class="container">
            <a class="navbar-brand" href="../"><img src="../images/logo_main.png" alt="Art мебель" style="width: 200px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsFurni">
                <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li>
                        <a class="nav-link" href="../">Главная</a>
                    </li>
                    <li><a class="nav-link" href="../#portfolio">Портфолио</a></li>
                    <li><a class="nav-link" href="../#testimonials">Отзывы</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            О нас
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #2f2f2f;">
                            <li><a class="dropdown-item" href="../#about" style="background-color: transparent;">О компании</a></li>
                            <li><a class="dropdown-item" href="../partnership" style="background-color: transparent;">Сотрудничество</a></li>
                            <li><a class="dropdown-item" href="../tehnika" style="background-color: transparent;">Бытовая техника</a></li>
                            <li><a class="dropdown-item" href="../topics/stock" style="background-color: transparent;">Акции</a></li>
							<li><a class="dropdown-item" href="../sale" style="background-color: transparent;">Распродажа</a></li>
                        </ul>
                    </li>
                    <li><a class="nav-link" href="../contacts">Контакты</a></li>
                </ul>
            </div>
        </div>
    </nav>
     <!-- Stock -->
     <style>
        .post-thumbnail img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .post-entry {
            height: 100%;
        }
    </style>
    <div>
        <div class="container">
            <div class="row mb-2" id="portfolio">
                <div class="col-lg-7 mx-auto text-center">
                    <h2 class="section-title" style="margin-top: 30px;margin-bottom: 30px;">Акции</h2>
                </div>
            </div>
			<div class="row">
    <?php foreach ($stocks as $stock): ?>
        <div class="col-12 col-sm-6 col-md-4 mb-5">
            <div class="post-entry">
                <div class="text-center mb-3">
                    <img src="<?= $stock['image']; ?>" alt="Акция" class="img-fluid">
                </div>
                <div class="post-content-entry">
                    <h4 class="mb-1" style="font-size: 18px;color:#2f2f2f"><?= $stock['title']; ?></h4>
                    <div class="meta">
                        <span style="font-size: 13px;"><?= $stock['description']; ?></span>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
        </div>
    </div>
</div>
		<!-- Footer  -->
		<footer class="footer-section">
			<div class="container relative">
				<div class="row">
					<div class="col-lg-12">
						<div class="subscription-form">
							<div class="d-flex flex-column align-items-start">
								<h3 class="mb-4" style="color: #2f2f2f;">Получите готовый проект и расчет стоимости вашей мебели</h3>
								<button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#fileUploadModal" style="padding: 15px 30px; font-size: 18px; border-radius: 8px; background-color: #2f2f2f; border: none; transition: all 0.3s ease;">
									<i class="fa fa-file-upload me-2"></i>
									Отправить файл
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Modal -->
				<div class="modal fade" id="fileUploadModal" tabindex="-1" aria-labelledby="fileUploadModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="fileUploadModalLabel">Файл на расчет</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<p>Оставьте Ваши контакты и наш менеджер свяжется с вами в ближайшее время, для уточнения деталей заявки.</p>
								<form action="https://formspree.io/f/mzzbwnzp" method="POST" enctype="multipart/form-data">
									<div class="mb-3">
										<label for="fullName" class="form-label">ФИО</label>
										<input type="text" class="form-control" id="fullName" name="fullName" required>
									</div>
									<div class="mb-3">
										<label for="email" class="form-label">Email</label>
										<input type="email" class="form-control" id="email" name="email" required>
									</div>
									<div class="mb-3">
										<label for="phone" class="form-label">Телефон</label>
										<input type="tel" class="form-control" id="phone" name="phone" required>
									</div>
									<div class="mb-3">
										<label for="file" class="form-label">Ссылка на ваш файл</label>
										<input type="text" class="form-control" id="file" name="url_file">
									</div>
									<button type="submit" class="btn btn-primary">Отправить</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="row g-5 mb-5">
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap">
							<a href="../" class="footer-logo"><img src="../images/logo_footer.png" alt="Art мебель" style="width: 300px;"></a></div>
						<p class="mb-4">Мебель на заказ в Томске. Мы занимаемся изготовлением мебели на заказ по самым современным технологиям.</p>

						<ul class="list-unstyled custom-social">
							<li><a href="https://t.me/art_meb70"><span class="fa fa-brands fa-telegram"></span></a></li>
							<li><a href="https://viber.click/79039556569"><span class="fa fa-brands fa-viber"></span></a></li>
							<li><a href="https://vk.com/artmeb70"><span class="fa fa-brands fa-vk"></span></a></li>
                            <li><a href="https://instagram.com/art_mebel70?igshid=MzRlODBiNWFlZA"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="https://api.whatsapp.com/send/?phone=79039556569&text&type=phone_number&app_absent=0"><span class="fa fa-brands fa-whatsapp"></span></a></li>
						</ul>
					</div>
					<div class="col-lg-8">
						<div class="row links-wrap">
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="../#portfolio">Портфолио</a></li>
									<li><a href="../#testimonials">Отзывы</a></li>
									<li><a href="../#about">О нас</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li style="color: #2f2f2f">Телефон:</a></li>
									<li><a href="tel:+73822226569">+7 (3822) 22-65-69</a></li>
									<li><a href="mailto:info@art-meb.com">Email: info@art-meb.com</a></li>
								</ul>
							</div>
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li style="color: #2f2f2f">Адрес:</li>
									<li style="color: #2f2f2f">г. Томск, Тверская, 81​</li>
									<li><a href="https://go.2gis.com/0nc9j">2GIS</a>, <a href="https://yandex.ru/maps/org/art_mebel/214991956496/?ll=84.972172%2C56.469259&z=16">Яндекс карты</a></li>
								</ul>
							</div>

						</div>
					</div>
				</div>
				<div class="border-top copyright">
					<div class="row pt-4">
						<div class="col-lg-6">
							<p class="mb-2 text-center text-lg-start">&copy; <script>document.write(new Date().getFullYear());</script> Разработано <a href="https://dldevs.ru/">DL Devs</a> | <a href='../policy.docx'>Политика конфиденциальности</a>
            </p>
						</div>
						<div class="col-lg-6 text-center text-lg-end">
							<ul class="list-unstyled d-inline-flex ms-auto">
								<li class="me-4"><a href="mailto:info@art-meb.com">Нашли ошибку? Напишите нам.</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<script src="../js/bootstrap.bundle.min.js"></script>
		<script src="../js/tiny-slider.js"></script>
		<script src="../js/custom.js"></script>
	</body>
</html>
