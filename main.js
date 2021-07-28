OT  = "";
AMA = "";
BSE = "";
WMYB= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist=0;

function preload()
{
    OT= loadSound("One Thing.mp3");
    OT.setVolume(1);
    OT.rate(1);

    AMA = loadSound("Act My Age.mp3");
    AMA.setVolume(1);
    AMA.rate(1);

    BSE = loadSound("Best Song Ever.mp3");
    BSE.setVolume(1);
    BSE.rate(1);

    WMYB= loadSound("What Makes You Beautiful.mp3");
    WMYB.setVolume(1);
    WMYB.rate(1);
}

function setup()
{
    canvas = createCanvas(600,500);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist>0.2)
    {
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals=floor(InNumberleftWristY);
        volume=remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = "+ volume;
        AMA.setVolume(volume);
        BSE.setVolume(volume);
        OT.setVolume(volume);
        WMYB.setVolume(volume);
    }
}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function play1()
{
    if(WMYB.isPlaying(), BSE.isPlaying(), OT.isPlaying())
    {
        WMYB.stop();
        BSE.stop();
        OT.stop();
        AMA.play();
    }
    else
    {
        AMA.play();
        WMYB.stop();
        BSE.stop();
        OT.stop();
    }
}

function play2()
{
    if(AMA.isPlaying(), BSE.isPlaying(), OT.isPlaying())
    {
        AMA.stop();
        BSE.stop();
        OT.stop();
        WMYB.play();
    }
    else
    {
        WMYB.play();
        AMA.stop();
        BSE.stop();
        OT.stop();
    }
}

function play3()
{
    if(WMYB.isPlaying(), AMA.isPlaying(), OT.isPlaying())
    {
        WMYB.stop();
        AMA.stop();
        OT.stop();
        BSE.play();
    }
    else
    {
        BSE.play();
        WMYB.stop();
        AMA.stop();
        OT.stop();
    }
}

function play4()
{
    if(WMYB.isPlaying(), AMA.isPlaying(), BSE.isPlaying())
    {
        WMYB.stop();
        AMA.stop();
        BSE.stop();
        OT.play();
    }
    else
    {
        OT.play();
        WMYB.stop();
        AMA.stop();
        BSE.stop();
    }
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY="+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("righttWristX = "+ rightWristX + "rightWristY="+rightWristY);
    }
}