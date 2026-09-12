:root {
    --navy: #071a2d;
    --blue: #1764c0;
    --blue-light: #2f80ed;
    --bg: #f4f7fa;
    --white: #ffffff;
    --text: #172033;
    --muted: #758295;
    --border: #e2e8ee;
    --green: #31c48d;
    --warning: #e6a700;
    --danger: #c0392b;
    --shadow: 0 8px 25px rgba(7, 26, 45, .08);
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

.header {
    height: 70px;
    background: var(--navy);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
}

.logo {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: 1px;
}

.header-right {
    font-size: 14px;
    opacity: .9;
}

.layout {
    display: flex;
    min-height: calc(100vh - 70px);
}

.sidebar {
    width: 240px;
    background: white;
    border-right: 1px solid var(--border);
    padding: 25px 15px;
}

.sidebar a {
    display: block;
    padding: 13px 15px;
    margin-bottom: 7px;
    border-radius: 10px;
    color: #536174;
    font-weight: 600;
}

.sidebar a:hover,
.sidebar a.active {
    background: #eaf3ff;
    color: var(--blue);
}

.main {
    flex: 1;
    padding: 35px;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.title {
    margin-bottom: 25px;
}

.title h1 {
    margin: 0 0 8px;
    font-size: 30px;
}

.title p {
    color: var(--muted);
    margin: 0;
}

.card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 25px;
    box-shadow: var(--shadow);
}

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.stat {
    background: white;
    border: 1px solid var(--border);
    border-radius: 15px;
    padding: 22px;
    box-shadow: var(--shadow);
}

.stat .number {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 6px;
}

.stat .label {
    color: var(--muted);
}

.actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 20px;
}

.action {
    display: block;
    padding: 25px;
    border-radius: 15px;
    background: white;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.action:hover {
    transform: translateY(-2px);
}

.action-icon {
    font-size: 32px;
    margin-bottom: 12px;
}

.action h3 {
    margin: 0 0 8px;
}

.action p {
    color: var(--muted);
    margin: 0;
}

.quick {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.input {
    width: 100%;
    padding: 14px 15px;
    border: 1px solid var(--border);
    border-radius: 10px;
    outline: none;
}

.input:focus {
    border-color: var(--blue-light);
}

.btn {
    border: 0;
    border-radius: 10px;
    padding: 13px 20px;
    font-weight: 700;
    background: var(--blue);
    color: white;
}

.btn:hover {
    opacity: .92;
}

.btn.secondary {
    background: #eaf3ff;
    color: var(--blue);
}

.btn.danger {
    background: var(--danger);
}

.quick-result {
    display: none;
    margin-top: 15px;
    padding: 15px;
    border-radius: 10px;
    line-height: 1.7;
}

.success {
    background: #eafaf4;
    border-color: #bcebd8;
}

.warning {
    background: #fff8df;
    border-color: #f0dc92;
}

.danger {
    background: #fff0ef;
    border-color: #efc1bd;
}

.result-card {
    display: none;
    margin-top: 25px;
    padding: 30px;
    border: 1px solid;
    border-radius: 16px;
}

.result-icon {
    font-size: 42px;
    margin-bottom: 10px;
}

.result-card h3 {
    margin: 0 0 12px;
    font-size: 24px;
}

.result-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 20px;
}

.result-details div {
    background: rgba(255,255,255,.75);
    padding: 15px;
    border-radius: 10px;
}

.result-details span {
    display: block;
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 5px;
}

.status-badge {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
}

.status-badge.success {
    color: #147a58;
}

.status-badge.warning {
    color: #8a6500;
}

.status-badge.danger {
    color: #9d2d24;
}

.demo-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

.demo-buttons button {
    border: 1px solid var(--border);
    background: white;
    padding: 10px 14px;
    border-radius: 8px;
}

.table-wrap {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 15px;
    border-bottom: 1px solid var(--border);
    text-align: left;
}

th {
    color: var(--muted);
    font-size: 13px;
}

.empty {
    text-align: center;
    padding: 35px;
    color: var(--muted);
}

.scanner {
    max-width: 650px;
    margin: auto;
}

.camera {
    min-height: 330px;
    border-radius: 18px;
    background: #071a2d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
}

.camera-icon {
    font-size: 55px;
    margin-bottom: 15px;
}

.profile-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.profile-item {
    padding: 18px;
    background: #f8fafc;
    border-radius: 12px;
}

.profile-item span {
    display: block;
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 5px;
}

.login-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
}

.login-box {
    width: 100%;
    max-width: 430px;
    background: white;
    border-radius: 18px;
    padding: 35px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.login-box h1 {
    margin-top: 0;
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;
    margin-bottom: 7px;
    font-weight: 700;
}

.full {
    width: 100%;
}

.notice {
    background: #fff8df;
    border: 1px solid #f0dc92;
    padding: 13px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 14px;
}

.back {
    display: inline-block;
    color: var(--blue);
    margin-bottom: 20px;
    font-weight: 700;
}

.footer {
    text-align: center;
    color: var(--muted);
    font-size: 13px;
    margin-top: 40px;
}

@media (max-width: 900px) {
    .sidebar {
        width: 190px;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .actions {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 700px) {
    .header {
        padding: 0 16px;
    }

    .layout {
        display: block;
    }

    .sidebar {
        width: 100%;
        border-right: 0;
        border-bottom: 1px solid var(--border);
        padding: 10px;
        overflow-x: auto;
        white-space: nowrap;
    }

    .sidebar a {
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 0;
    }

    .main {
        padding: 20px 15px;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .quick {
        flex-direction: column;
    }

    .result-details,
    .profile-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 500px) {
    .header-right {
        display: none;
    }

    .title h1 {
        font-size: 24px;
    }

    .card {
        padding: 18px;
    }
}
