import { Link, useRouter } from "expo-router";
import React, { useEffect } from "react";
import Form from "../../Component/Core/Form";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
WebBrowser.maybeCompleteAuthSession();
function HomeScreen() {
  const router = useRouter();
  const [frequest, fresponce, fpromptAsync] = Facebook.useAuthRequest({
    clientId: "1291481368201596",
  });
  const [request, responce, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "673991695434-kt4uret0gbhkefr1kfs553lqdgienfqq.apps.googleusercontent.com",
    webClientId:
      "673991695434-9nk0m6ue3c68stg2707u2f3mkgamgkb3.apps.googleusercontent.com",
    iosClientId:
      "673991695434-sk9c6mhai0c9j8qgikvjcn89ascsta4f.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (responce?.type === "success") {
      console.log(responce);
    } else {
      console.log(responce);
    }
  }, [responce]);

  useEffect(() => {
    if (fresponce?.type === "success") {
      console.log("fb =>>>>>" + JSON.stringify(fresponce));
    } else {
      console.log(fresponce);
    }
  }, [fresponce]);

  return (
    <>
      <TouchableOpacity onPress={() => router.navigate("./profile")}>
        <Text>profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => promptAsync()}
        style={{ paddingTop: 20 }}
      >
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => fpromptAsync()}
        style={{ paddingTop: 20 }}
      >
        <Text>Facebook</Text>
      </TouchableOpacity>
      <Link href={"./profile"}>profile</Link>

      <TouchableOpacity
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log("CRED", credential);
            // signed in
          } catch (e) {
            if (e.code === "ERR_REQUEST_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      >
        <Text>Apple Auth</Text>
      </TouchableOpacity>
      <Form />
    </>
  );

  // return <Grid />;
  // return <CustomButton />;
  // return <CustomActivityIndicator />;
  // return (
  //   // <View style={{ height: "100%" }}>
  //   <CustomModel />
  //   // </View>
  // );
}
export default HomeScreen;

// rnfe
// rnfes

var google_auth_log = {
  authentication: {
    accessToken:
      "ya29.a0AfB_byDc-t_Dm3Qh3J7ef0RSOFkLn7CPsISsNDyLJdDcq4XJRt3pyL3FsQRkWCH78VkjtW1y6IZRzD4BwUGtzf5CYxydGwGl1lROyYn0FZQKxSkzDhOQJAsP7rLgxjWE6UamNETGEEXs5I_4IWaNbB2fV5paZM2NclaaaCgYKARISARMSFQHGX2MiZYJ3YFI60-41nJ4Z-e9Vjw0171",
    expiresIn: 3599,
    idToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1YzE4OGE4MzU0NmZjMTg4ZTUxNTc2YmE3MjgzNmUwNjAwZThiNzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NzM5OTE2OTU0MzQta3Q0dXJldDBnYmhrZWZyMWtmczU1M2xxZGdpZW5mcXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NzM5OTE2OTU0MzQta3Q0dXJldDBnYmhrZWZyMWtmczU1M2xxZGdpZW5mcXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTQ1NzMwOTA5MjY4MDUwNjY3NjIiLCJlbWFpbCI6InBkaGlyYXBhcmEuZW5hY3RvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkliTWthMVJRTkNGRkY2aGdiSXNDeVEiLCJuYW1lIjoiUGRoaXJhcGFyYSBFbmFjdG9uIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0t0UUVHMlIyMVZzcVhkMlNLZWpVNDJFZjhhV21qMl9GUm03WjUzWlFYVT1zOTYtYyIsImdpdmVuX25hbWUiOiJQZGhpcmFwYXJhIiwiZmFtaWx5X25hbWUiOiJFbmFjdG9uIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDkwMTY2NjUsImV4cCI6MTcwOTAyMDI2NX0.ZIA7x5ALkntrJBmtVLEBT0-7vVIAjtTcpZVC98ZVFgL_y4IQfHV0vl7n2HchNkcsGljmveqGG88s56ZzeeGTW4VKoE1zGvsF4P4mSx0Snsi9wU2To1J2fcIJCSVGItDISmzH8toigECyxSVBOu86VkZYDP6et17zjqq8-VQeTPqFgzxS0A2H680QY5U5NI5B4DQ3c3KP8tvubSeEIqZZZo1zfPVztOguhbdbk3SAvUhyyF1EuWLdRyqCi8Gc-39wv-MN7QtZ8alpxo3vKLQQd5iX27p4560y92y9VsntXKxzFnpQDJ96IR2-d1frvEYGlp-yhS2-7TA6XPRtFvg51w",
    issuedAt: 1709016680,
    refreshToken:
      "1//0gaKw-THBbLPQCgYIARAAGBASNwF-L9IrQfvlGI-49dzFWrUoh8t1RiKQnUFYChHBY-EYlJiDqpPV-XXcHPono29TmAm2fkoHv-U",
    scope:
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
    state: undefined,
    tokenType: "Bearer",
  },
  error: null,
  errorCode: null,
  params: {
    access_token:
      "ya29.a0AfB_byDc-t_Dm3Qh3J7ef0RSOFkLn7CPsISsNDyLJdDcq4XJRt3pyL3FsQRkWCH78VkjtW1y6IZRzD4BwUGtzf5CYxydGwGl1lROyYn0FZQKxSkzDhOQJAsP7rLgxjWE6UamNETGEEXs5I_4IWaNbB2fV5paZM2NclaaaCgYKARISARMSFQHGX2MiZYJ3YFI60-41nJ4Z-e9Vjw0171",
    authuser: "0",
    code: "4/0AeaYSHDJW0FYeRvO5ihv3_GeWgn78diA6gQ_LKDHPEIz5wTRZyc3k6LMGbfo0TcTOdMlGA",
    id_token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1YzE4OGE4MzU0NmZjMTg4ZTUxNTc2YmE3MjgzNmUwNjAwZThiNzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NzM5OTE2OTU0MzQta3Q0dXJldDBnYmhrZWZyMWtmczU1M2xxZGdpZW5mcXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NzM5OTE2OTU0MzQta3Q0dXJldDBnYmhrZWZyMWtmczU1M2xxZGdpZW5mcXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTQ1NzMwOTA5MjY4MDUwNjY3NjIiLCJlbWFpbCI6InBkaGlyYXBhcmEuZW5hY3RvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkliTWthMVJRTkNGRkY2aGdiSXNDeVEiLCJuYW1lIjoiUGRoaXJhcGFyYSBFbmFjdG9uIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0t0UUVHMlIyMVZzcVhkMlNLZWpVNDJFZjhhV21qMl9GUm03WjUzWlFYVT1zOTYtYyIsImdpdmVuX25hbWUiOiJQZGhpcmFwYXJhIiwiZmFtaWx5X25hbWUiOiJFbmFjdG9uIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDkwMTY2NjUsImV4cCI6MTcwOTAyMDI2NX0.ZIA7x5ALkntrJBmtVLEBT0-7vVIAjtTcpZVC98ZVFgL_y4IQfHV0vl7n2HchNkcsGljmveqGG88s56ZzeeGTW4VKoE1zGvsF4P4mSx0Snsi9wU2To1J2fcIJCSVGItDISmzH8toigECyxSVBOu86VkZYDP6et17zjqq8-VQeTPqFgzxS0A2H680QY5U5NI5B4DQ3c3KP8tvubSeEIqZZZo1zfPVztOguhbdbk3SAvUhyyF1EuWLdRyqCi8Gc-39wv-MN7QtZ8alpxo3vKLQQd5iX27p4560y92y9VsntXKxzFnpQDJ96IR2-d1frvEYGlp-yhS2-7TA6XPRtFvg51w",
    prompt: "consent",
    scope:
      "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    state: "TbYISEoPCq",
  },
  type: "success",
  url: "com.pdhirapara.deleteexpo:/oauthredirect?state=TbYISEoPCq&code=4/0AeaYSHDJW0FYeRvO5ihv3_GeWgn78diA6gQ_LKDHPEIz5wTRZyc3k6LMGbfo0TcTOdMlGA&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=consent",
};

var apple_auth_log = {
  authorizationCode:
    "c9b414622e1154860a8969f7624d58b0d.0.rzuy.NZoVbx9xq9Wp1R_uDgSjlQ",
  email: "itssheel134@gmail.com",
  fullName: {
    familyName: "Sachania",
    givenName: "Sheel",
    middleName: null,
    namePrefix: null,
    nameSuffix: null,
    nickname: null,
  },
  identityToken:
    "eyJraWQiOiJsVkhkT3g4bHRSIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiaG9zdC5leHAuRXhwb25lbnQiLCJleHAiOjE3MDkxMTA4OTIsImlhdCI6MTcwOTAyNDQ5Miwic3ViIjoiMDAwOTQ4LmFmOTExYTU0ZjlkOTQ0M2RiOWJjYThkMWJlZDJjODc2LjA5MDEiLCJjX2hhc2giOiJRZ05tOEI0NkVsWVE3QzVQdl90OHdRIiwiZW1haWwiOiJpdHNzaGVlbDEzNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXV0aF90aW1lIjoxNzA5MDI0NDkyLCJub25jZV9zdXBwb3J0ZWQiOnRydWUsInJlYWxfdXNlcl9zdGF0dXMiOjJ9.SYS9jl-JDyo4QeygyycJZ9UbTYpqdB2UfGSDUGMoBqsEuFmZc3PeLRUFx4dnXQZfYFLQwbQMCPLccyq7TqQLdNwYXzbGxnLhaYwds17jVFr5djdan30JQV-udED_FMwf4MYjW0-j2SbGDrxfm1xUxY4hR_FImkxaBBp9Ye7zUXrX9f4Ja_3CpSG8VU6O8pp8PDzESS07IVeChdo1fmFHtuK8OJH34SV8uBjUt-LDXPjB066fRvUd8R8g6rXaK9X55NWW3ABgr4bWFFDl3ea9wsNG-NRPNcvgdsWWPks1XObevEFC38zZubDbhNUBmmLBBRCcpwFoNwMSVGpz5HNoKg",
  realUserStatus: 2,
  state: null,
  user: "000948.af911a54f9d9443db9bca8d1bed2c876.0901",
};

var fb_auth_log = {
  type: "success",
  error: null,
  url: "fb1291481368201596://authorize/#access_token=EAASWmHAviXwBOxnGOJSy0vZB0ZBSsTVJ3DrZAvEJZA8flVrFh5RcZAw05gk2DF8iPWPVKSNrZADTKXZBlVUhtBsnxRXQmlSonuLXRkeTShYLZAtzXNOaeZAAvQXRakAFhqf3Bv4HFivdm5pyk9arDZAZAZCSgpAf9rv613Ox6xIA2TZBqsImEvCyjIYPZA3e8R4gZDZD&data_access_expiration_time=1716807881&expires_in=5183834&state=sYDJG5mY0H",
  params: {
    access_token:
      "EAASWmHAviXwBOxnGOJSy0vZB0ZBSsTVJ3DrZAvEJZA8flVrFh5RcZAw05gk2DF8iPWPVKSNrZADTKXZBlVUhtBsnxRXQmlSonuLXRkeTShYLZAtzXNOaeZAAvQXRakAFhqf3Bv4HFivdm5pyk9arDZAZAZCSgpAf9rv613Ox6xIA2TZBqsImEvCyjIYPZA3e8R4gZDZD",
    data_access_expiration_time: "1716807881",
    expires_in: "5183834",
    state: "sYDJG5mY0H",
  },
  authentication: {
    accessToken:
      "EAASWmHAviXwBOxnGOJSy0vZB0ZBSsTVJ3DrZAvEJZA8flVrFh5RcZAw05gk2DF8iPWPVKSNrZADTKXZBlVUhtBsnxRXQmlSonuLXRkeTShYLZAtzXNOaeZAAvQXRakAFhqf3Bv4HFivdm5pyk9arDZAZAZCSgpAf9rv613Ox6xIA2TZBqsImEvCyjIYPZA3e8R4gZDZD",
    tokenType: "bearer",
    expiresIn: "5183834",
    state: "sYDJG5mY0H",
    issuedAt: 1709031882,
  },
  errorCode: null,
};

//
