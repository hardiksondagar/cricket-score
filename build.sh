cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore t20wc.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk t20wc
cd platforms/android/build/outputs/apk/
mv t20wc.apk t20wc.`date +%Y_%m_%d_%H:%M:%S`.apk
/usr/local/android-sdk-linux/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk t20wc.apk
