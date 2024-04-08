// Import the data to customize and insert them into page
const fetchData = () => {
	// fetch("customize.json")
	//   .then(data => data.json())
	//   .then(data => {

	//   })

	let data = {
		"greeting": "你好啊",
		"name": "余敏佳！",
		"greetingText": "很庆幸能在最美丽的年华遇见最美丽的你",
		"wishText": "朱颜长似，头上花枝，岁岁年年。愿小佳欢笑常伴，岁岁皆欢，快乐无限。",
		"imagePath": "img/xj3.jpg",
		"text1": "今天是你的生日啊!!! :D",
		"textInChatBox": "哥哥在此诚挚的祝你生日快乐！！！愿未来岁月，欢笑常伴，快乐无穷！",
		"sendButtonLabel": "发送",
		"text2": "我想给你一个惊喜",
		"text3": "我认真的想了很久",
		"text4": "我认识到，我想要做一些",
		"text4Adjective": "特殊的事情",
		"text5Entry": "因为，",
		"text5Content": "你对于我来说，很特殊",
		"smiley": ":)",
		"bigTextPart1": "所",
		"bigTextPart2": "以",
		"wishHeading": "生日快乐啊!",
		"outroText": "我希望你喜欢这个小小的惊喜!",
		"replayText": "点这里，还有惊喜🤗🤗！！",
		"outroSmiley": ":)"
	}

	dataArr = Object.keys(data)
	dataArr.map(customData => {
		if (data[customData] !== "") {
			if (customData === "imagePath") {
				document
					.querySelector(`[data-node-name*="${customData}"]`)
					.setAttribute("src", data[customData])
			} else {
				document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData]
			}
		}

		// Check if the iteration is over
		// Run amimation if so
		if (dataArr.length === dataArr.indexOf(customData) + 1) {
			document.querySelector("#startButton").addEventListener("click", () => {
				document.querySelector(".startSign").style.display = "none"
				audio.play()
				animationTimeline()
			})
			// animationTimeline()
		}
	})
}

let audio = null

// 在文档加载时预加载音频
document.addEventListener("DOMContentLoaded", () => {
	audio = new Audio("music/bgMusic.mp3")
	audio.preload = "auto"
})

// const playPauseButton = document.getElementById('playPauseButton')
// let isPlaying = false // 初始状态为未播放

// playPauseButton.addEventListener('click', () => {
//   isPlaying = !isPlaying // 切换播放状态

//   if (isPlaying) {
//     // 如果当前是播放状态，则开始播放音频并更新按钮样式
//     audio.play()
//     playPauseButton.classList.add('playing')
//   } else {
//     // 如果当前是暂停状态，则暂停音频并更新按钮样式
//     audio.pause()
//     playPauseButton.classList.remove('playing')
//   }
// })





// Animation Timeline
const animationTimeline = () => {
	// Spit chars that needs to be animated individually
	const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0]
	const hbd = document.getElementsByClassName("wish-hbd")[0]

	textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`

	hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`

	const ideaTextTrans = {
		opacity: 0,
		y: -20,
		rotationX: 5,
		skewX: "15deg"
	}

	const ideaTextTransLeave = {
		opacity: 0,
		y: 20,
		rotationY: 5,
		skewX: "-15deg"
	}

	const tl = new TimelineMax()

	tl
		.to(".container", 1.5, {
			visibility: "visible"
		})
		.from(".one", 1, {
			opacity: 0,
			y: 10
		})
		.from(".two", 1, {
			opacity: 0,
			y: 10
		})
		.to(
			".one",
			1, {
				opacity: 0,
				y: 10
			},
			"+=2.5"
		)
		.to(
			".two",
			1, {
				opacity: 0,
				y: 10
			},
			"-=1"
		)
		.from(".three", 1, {
			opacity: 0,
			y: 10
			// scale: 1
		})
		.to(
			".three",
			1, {
				opacity: 0,
				y: 10
			},
			"+=2"
		)
		.from(".four", 1, {
			scale: 0.2,
			opacity: 0
		})
		.from(".fake-btn", 0.7, {
			scale: 0.2,
			opacity: 0
		})
		.staggerTo(
			".hbd-chatbox span",
			0.5, {
				visibility: "visible"
			},
			0.2
		)
		.to(".fake-btn", 0.1, {
			backgroundColor: "#8FE3B6"
		})
		.to(
			".four",
			0.5, {
				scale: 0.2,
				opacity: 0,
				y: -150
			},
			"+=1"
		)
		.from(".idea-1", 1, ideaTextTrans)
		.to(".idea-1", 1, ideaTextTransLeave, "+=1.5")
		.from(".idea-2", 1, ideaTextTrans)
		.to(".idea-2", 1, ideaTextTransLeave, "+=1.5")
		.from(".idea-3", 1, ideaTextTrans)
		.to(".idea-3 strong", 0.5, {
			scale: 1.2,
			x: 10,
			backgroundColor: "rgb(21, 161, 237)",
			color: "#fff"
		})
		.to(".idea-3", 1, ideaTextTransLeave, "+=1.5")
		.from(".idea-4", 1, ideaTextTrans)
		.to(".idea-4", 1, ideaTextTransLeave, "+=1.5")
		.from(
			".idea-5",
			1, {
				rotationX: 15,
				rotationZ: -10,
				skewY: "-5deg",
				y: 50,
				z: 10,
				opacity: 0
			},
			"+=0.5"
		)
		.to(
			".idea-5 .smiley",
			1, {
				rotation: 90,
				x: 8
			},
			"+=0.4"
		)
		.to(
			".idea-5",
			1, {
				scale: 0.2,
				opacity: 0
			},
			"+=2"
		)
		.staggerFrom(
			".idea-6 span",
			0.8, {
				scale: 3,
				opacity: 0,
				rotation: 15,
				ease: Expo.easeOut
			},
			0.2
		)
		.staggerTo(
			".idea-6 span",
			0.8, {
				scale: 3,
				opacity: 0,
				rotation: -15,
				ease: Expo.easeOut
			},
			0.2,
			"+=1"
		)
		.staggerFromTo(
			".baloons img",
			2.5, {
				opacity: 0.9,
				y: 1400
			}, {
				opacity: 1,
				y: -1000
			},
			0.2
		)
		.from(
			".lydia-dp",
			0.5, {
				scale: 3.5,
				opacity: 0,
				x: 25,
				y: -25,
				rotationZ: -45
			},
			"-=2"
		)
		.from(".hat", 0.5, {
			x: -100,
			y: 350,
			rotation: -180,
			opacity: 0
		})
		.staggerFrom(
			".wish-hbd span",
			1, {
				opacity: 0,
				y: -50,
				// scale: 0.3,
				rotation: 150,
				skewX: "30deg",
				ease: Elastic.easeOut.config(1, 0.5)
			},
			0.1
		)
		.staggerFromTo(
			".wish-hbd span",
			1, {
				scale: 1.4,
				rotationY: 150
			}, {
				scale: 1,
				rotationY: 0,
				color: "#ff69b4",
				ease: Expo.easeOut
			},
			0.1,
			"party"
		)
		.from(
			".wish h5",
			0.5, {
				opacity: 0,
				y: 10,
				skewX: "-15deg"
			},
			"party"
		)
		.staggerTo(
			".eight svg",
			1.5, {
				visibility: "visible",
				opacity: 0,
				scale: 80,
				repeat: 3,
				repeatDelay: 1.4
			},
			0.3
		)
		.to(".six", 0.5, {
			opacity: 0,
			y: 30,
			zIndex: "-1"
		})
		.staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
		.to(
			".last-smile",
			0.5, {
				rotation: 90
			},
			"+=1"
		)

	// tl.seek("currentStep");
	// tl.timeScale(2);

	// Restart Animation on click
	const replyBtn = document.getElementById("replay")
	replyBtn.addEventListener("click", () => {
		// tl.restart()

		location.href = 'happy.html'
		//重新开始

	})
}

// Run fetch and animation in sequence
fetchData()
