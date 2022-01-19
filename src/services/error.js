const AUTH_ERROR = {
    // Firebase의 auth 에러 메세지 정의
    accountExistsWithDifferentCredential: {
        title: "계정 안내!",
        subTitle: "이미 있는 계정입니다.",
    },
    invalidCredential: {
        title: "인증 오류!",
        subTitle: "로그인 인증에 오류가 발생했습니다.",
    },
    operationNotAllowed: {
        title: "로그인 실패!",
        subTitle:
            "로그인 과정에서 오류가 발생했습니다. 관리자에게 문의하시길 바랍니다.",
    },
    userDisabled: {
        title: "정지 계정!",
        subTitle: "정지된 계정입니다. 관리자에게 연락하시길 바랍니다.",
    },
    userNotFound: {
        title: "계정 없음!",
        subTitle: "해당 계정 정보가 없습니다.",
    },
    userEmailNotFound: {
        title: "가입된 이메일 주소가 아닙니다.",
        subTitle: "다시 확인해 주시기 바랍니다.",
    },
    wrongPassword: {
        title: "비밀번호 오류!",
        subTitle:
            "입력하신 비밀번호가 잘못되었습니다.다시 확인하시기 바랍니다.",
    },
    invalidEmail: {
        title: "이메일 오류!",
        subTitle: "입력하신 이메일 정보가 없습니다. 다시 확인하시기 바랍니다.",
    },
    emailAlreadyInUse: {
        title: "사용할 수 없는 이메일!",
        subTitle: "이미 사용중인 이메일입니다. 다시 확인하시기 바랍니다.",
    },
    weakPassword: {
        title: "비밀번호 경고!",
        subTitle: "입력하신 비밀번호가 보안에 취약합니다.",
    },
    requiresRecentLogin: {
        title: "인증 만료!",
        subTitle: "인증이 만료되었습니다. 다시 로그인 하시기 바랍니다.",
    },
    userMismatch: {
        title: "사용자 불일치!",
        subTitle: "다른 사용자의 인증정보입니다!",
    },
    providerAlreadyLinked: {
        title: "Already Linked!",
        subTitle:
            "Sorry, but your account is already linked to this credential.",
    },
    credentialAlreadyInUse: {
        title: "불가능 인증정보!",
        subTitle: "Sorry, but this credential is already used by another user.",
    },
    toManyrequests: {
        title: "확인 횟수 초과!",
        subTitle:
            "잘못된 비밀번호로 비밀번호 확인 횟수가 초과 되었습니다. 잠시 후 다시 시도하시기 바랍니다.",
    },
};


const showErrorMessage = (code) => {
    switch (code) {
      // Firebase Error Messages
      case "auth/account-exists-with-different-credential":
        return AUTH_ERROR.accountExistsWithDifferentCredential;

      case "auth/invalid-credential":
        return AUTH_ERROR.invalidCredential;

      case "auth/operation-not-allowed":
        return AUTH_ERROR.operationNotAllowed;

      case "auth/user-disabled":
        return AUTH_ERROR.userDisabled;

      case "auth/user-not-found":
        return AUTH_ERROR.userEmailNotFound;

      case "auth/wrong-password":
        return AUTH_ERROR.wrongPassword;

      case "auth/invalid-email":
        return AUTH_ERROR.invalidEmail;

      case "auth/email-already-in-use":
        return AUTH_ERROR.emailAlreadyInUse;

      case "auth/weak-password":
        return AUTH_ERROR.weakPassword;

      case "auth/requires-recent-login":
        return AUTH_ERROR.requiresRecentLogin;

      case "auth/user-mismatch":
        return AUTH_ERROR.userMismatch;

      case "auth/provider-already-linked":
        return AUTH_ERROR.providerAlreadyLinked;

      case "auth/credential-already-in-use":
        return AUTH_ERROR.credentialAlreadyInUse;

      case "auth/too-many-requests":
        return AUTH_ERROR.toManyrequests;
      default:
        return AUTH_ERROR.toManyrequests;
    }
  };

export { AUTH_ERROR , showErrorMessage};
