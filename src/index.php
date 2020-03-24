<!DOCTYPE html>
<html lang=en>

<head>
	<title>Local Regularity Documents</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="HeaderFriendly" content="true">
	<meta name="MobileOptimized" content="width">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="description" content="Local regularity documents search">

	<link rel="stylesheet" href="css/reset.css" type="text/css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


	<link rel="stylesheet" href="css/fonts.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/mobile.css">
</head>

<body>
	<?php
	session_start();
	if (isset($_SESSION['username'])) {
		echo '<p>Logged in as</p>';
		echo '<p>' . $_SESSION['username'] . '</p>';
		echo '<p><a href="/?logout">Log Out</a></p>';
		die();
	}

	// If there is no username, they are logged out, so show them the login link
	if (!isset($_SESSION['username'])) {
		$authorize_url = 'TODO';
		echo '<p>Not logged in</p>';
		echo '<p><a href="' . $authorize_url . '">Log In</a></p>';
	}
	function http($url, $params = false)
	{
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		if ($params)
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
		return json_decode(curl_exec($ch));
	}
	?>
	<header class="symbolic">
		<nav>
			<ul>
				<li id="logo">
					<img class="iu_logo" src="images/IU_logo_black.png" alt="logo of Innopolis University">
				</li>
				<?php echo isset($_POST['id']) ? ` 
				<li id="my" class="clickbel navigation">My Documents</li>
				<li id="search" class="clickbel navigation">Search Documents</li>
				<li id="load" class="clickbel navigation">Load Documents</li>
				` : ''; ?>
				<li id="change"><label for="lang_marker" id="lang_text" class="navigation">Language:</label>
					<select id="lang_marker">
						<option class="lang_label">EN</option>
						<option class="lang_label">RU</option>
						<option class="lang_label">TAT</option>
					</select>
				</li>
			</ul>
		</nav>
	</header>
	<main id="content">
		<!-- Loads by the user's click -->
	</main>
	<script src="js/lang.js"></script>
	<script src="js/load.js"></script>
	<footer class="symbolic"></footer>
</body>

</html>