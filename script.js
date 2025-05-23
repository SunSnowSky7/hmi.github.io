// 设置目标日期
const targetDate = new Date('2026-03-15T00:00:00+07:00'); // 请根据实际情况修改为正确的回国日期

// 更新倒计时的函数
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // 计算天数、小时数、分钟数和秒数
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // 显示倒计时
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `距离密小熊回国还有 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);

// 初始化倒计时
updateCountdown();
