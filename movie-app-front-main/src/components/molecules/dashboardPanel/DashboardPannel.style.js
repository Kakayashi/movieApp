import styled from "styled-components";

export const DashboardWrapper = styled.div`
	background: ${({ theme }) => theme.colors.black};
	margin: 100px;
	color: #fff;
	padding: 20px;
	display: flex;
	flex-direction: row;
	border-radius: 10px;
`;

export const DashboardPannelMenu = styled.div`
	display: flex;
	flex-direction: column;
	width: 10%;
	height: 100%;
	align-items: center;
	span {
		margin: 10px 0;
		font-size: 20px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.blackHover};
		width: 90%;
		text-align: center;
		transition: all 0.1s ease-in-out;

		&:hover {
			background-color: ${({ theme }) => theme.colors.blackHover};
			cursor: pointer;
		}
	}
`;

export const DashboardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border-left: 2px solid ${({ theme }) => theme.colors.gold};
`;

export const DashboardContentTitle = styled.h1`
	color: #fff;
	font-size: 48px;
`;

export const ImportWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 80px;
	gap: 10px;
	align-items: center;

	span {
		font-size: 26px;
	}

	button {
		padding: 10px 20px;
		margin-top: 10px;
	}
`;

export const ExportItem = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 280px;
	padding: 20px;
	border: 2px solid ${({ theme }) => theme.colors.blackHover};
	gap: 40px;

	input {
		margin-left: 60px;
		margin-top: 20px;
		margin-bottom: -20px;
	}
`;

export const DashboardUserEditWrapper = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;

	button {
		width: 100px;
		height: 40px;
		margin-top: 10px;
	}
`;

export const DashboardUserEditContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;

	/* input {
		width: 100px !important;
	} */
`;

export const UserItem = styled.div`
	display: flex;
	flex-direction: row;
	gap: 120px;
	font-size: 22px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.blackHover};
	padding: 10px 0;
	align-items: center;
	span {
		width: 100px;

		&:first-child {
			width: -0px;
		}
		&:nth-child(2) {
			width: 0px;
		}
		&:nth-child(3) {
			width: 160px;
		}
	}

	button {
		margin: 0;
	}
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;

	button {
		margin: 0;
	}
`;
