
import webpHtmlNosvg from "gulp-webp-html-nosvg"; //плагин обрабатыввает только файлы не SVG
import versionNumber from "gulp-version-number"; //добавляет определённый ключ который не позволяет кэшировать файлы

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error:<%=error.message %>"
			}))
		)
		.pipe(app.plugins.fileinclude()) //сбор файла из частей
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
		.pipe(app.plugins.if(app.isBuild,
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			})
		))

		.pipe(app.gulp.dest(app.path.build.html)) //перенос в папку назначения созданные и обработанные файлы
		.pipe(app.plugins.browsersync.stream()); //включает обновление если произошли изменения в файле
}