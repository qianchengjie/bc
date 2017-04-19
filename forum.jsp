<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=.7,user-scalable=no,maximum-scale=1">
	<title>想说就说</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<!-- my css -->
	<link rel="stylesheet" type="text/css" href="css/forum.css">
	<link rel="stylesheet" type="text/css" href="css/topnav.css">
	<link rel="stylesheet" type="text/css" href="css/flat-ui.min.css">
</head>
<body>
<jsp:include page="topnav.jsp"></jsp:include>
<!-- 主面板 -->
<div class="warp">
	<div class="container">
		<!-- 楼层 -->
		<div class="word-container">
			<div class="row">
				<div class="col-xs-12">
					<!-- 楼层内容 -->
					<div class="word">
						<!-- 楼层左侧 -->
						<div class="col-xs-2">
							<div class="word-left">
								<img class="img-rounded center-block head-sculpture" src="img/1.jpg">
							</div>
						</div>
						<!-- 楼层主体 -->
						<div class="col-xs-10">
							<div class="word-body">
								<!-- 楼层主体头部 -->
								<div class="word-head">
									<h3>Name1<small>221楼</small></h3>
								</div>
								<!-- 楼层主体内容 -->
								<div class="word-content">
									<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
								</div>
								<!-- 楼层主体尾部 -->
								<div class="word-foot">
									<b>2017年4月19日14:54:50</b>
									<button class="btn btn-primary btn-comment">评论</button>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复层 -->
					<div class="reply">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复 -->
								<div class="reply-container">
									<!-- 回复左侧 -->
									<div class="col-xs-2 col-md-1">
										<div class="reply-left">
											<img class="img-rounded head-sculpture" src="img/1.jpg">
										</div>
									</div>
									<!-- 回复主体 -->
									<div class="col-xs-10 col-md-11">
										<div class="reply-body">
											<!-- 回复主体头部 -->
											<div class="reply-head">
												<h5>Name2<small>回复</small> 楼主</h5>
											</div>
											<!-- 回复主体内容 -->
											<div class="reply-content">
												<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
											</div>
											<!-- 回复主体尾部 -->
											<div class="reply-foot">
												<b>2017年4月19日14:54:50</b>
												<button class="btn btn-primary btn-reply">回复</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复层 -->
					<div class="reply">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复 -->
								<div class="reply-container">
									<!-- 回复左侧 -->
									<div class="col-xs-2 col-md-1">
										<div class="reply-left">
											<img class="img-rounded head-sculpture" src="img/1.jpg">
										</div>
									</div>
									<!-- 回复主体 -->
									<div class="col-xs-10 col-md-11">
										<div class="reply-body">
											<!-- 回复主体头部 -->
											<div class="reply-head">
												<h5>Name3<small>回复</small> 楼主</h5>
											</div>
											<!-- 回复主体内容 -->
											<div class="reply-content">
												<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
											</div>
											<!-- 回复主体尾部 -->
											<div class="reply-foot">
												<b>2017年4月19日14:54:50</b>
												<button class="btn btn-primary btn-reply">回复</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复框 -->
					<div class="reply-frame">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复文本域 -->
								<textarea class="col-xs-12"></textarea>
								<!-- 回复文本底部 -->
								<div class="col-xs-12">
									<div class="reply-frame-foot">
										<img src="img/happy.png">
										<button class="btn btn-primary btn-report">发表</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 楼层 -->
		<div class="word-container">
			<div class="row">
				<div class="col-xs-12">
					<!-- 楼层内容 -->
					<div class="word">
						<!-- 楼层左侧 -->
						<div class="col-xs-2">
							<div class="word-left">
								<img class="img-rounded center-block head-sculpture" src="img/1.jpg">
							</div>
						</div>
						<!-- 楼层主体 -->
						<div class="col-xs-10">
							<div class="word-body">
								<!-- 楼层主体头部 -->
								<div class="word-head">
									<h3>Name4<small>221楼</small></h3>
								</div>
								<!-- 楼层主体内容 -->
								<div class="word-content">
									<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
								</div>
								<!-- 楼层主体尾部 -->
								<div class="word-foot">
									<b>2017年4月19日14:54:50</b>
									<button class="btn btn-primary btn-comment">评论</button>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复层 -->
					<div class="reply">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复 -->
								<div class="reply-container">
									<!-- 回复左侧 -->
									<div class="col-xs-2 col-md-1">
										<div class="reply-left">
											<img class="img-rounded head-sculpture" src="img/1.jpg">
										</div>
									</div>
									<!-- 回复主体 -->
									<div class="col-xs-10 col-md-11">
										<div class="reply-body">
											<!-- 回复主体头部 -->
											<div class="reply-head">
												<h5>Name5<small>回复</small> 楼主</h5>
											</div>
											<!-- 回复主体内容 -->
											<div class="reply-content">
												<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
											</div>
											<!-- 回复主体尾部 -->
											<div class="reply-foot">
												<b>2017年4月19日14:54:50</b>
												<button class="btn btn-primary btn-reply">回复</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复层 -->
					<div class="reply">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复 -->
								<div class="reply-container">
									<!-- 回复左侧 -->
									<div class="col-xs-2 col-md-1">
										<div class="reply-left">
											<img class="img-rounded head-sculpture" src="img/1.jpg">
										</div>
									</div>
									<!-- 回复主体 -->
									<div class="col-xs-10 col-md-11">
										<div class="reply-body">
											<!-- 回复主体头部 -->
											<div class="reply-head">
												<h5>Name6<small>回复</small> 楼主</h5>
											</div>
											<!-- 回复主体内容 -->
											<div class="reply-content">
												<p>相对定位元素，它的父元素符合标签嵌套。绝对定位元素，它的父元素是离它最近的定位元素（绝对定位，相对定位，固定，但不包括浮动）或者视窗尺寸（没找到定位元素时）。浮动元素，它的父元素也符合标签嵌套。固定元素（特殊的绝对定位），它的父元素是视窗（浏览器默认用来展示内容的区域的尺寸，不是html 或body 的尺寸）。</p>
											</div>
											<!-- 回复主体尾部 -->
											<div class="reply-foot">
												<b>2017年4月19日14:54:50</b>
												<button class="btn btn-primary btn-reply">回复</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 回复框 -->
					<div class="reply-frame">
						<div class="col-xs-10 col-xs-offset-1">
							<div class="row">
								<!-- 回复文本域 -->
								<textarea class="col-xs-12"></textarea>
								<!-- 回复文本底部 -->
								<div class="col-xs-12">
									<div class="reply-frame-foot">
										<img src="img/happy.png">
										<button class="btn btn-primary btn-report">发表</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<!-- my js -->
<script type="text/javascript" src="js/forum.js"></script>
<script src="js/topnav.js"></script>
</body>
</html>