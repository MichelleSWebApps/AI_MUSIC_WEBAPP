OT  = "";
AMA = "";
BSE = "";
WMYB= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist=0;
scoreRightWrist=0;

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

    circle(rightWristX, rightWristY, 20);

    if(scoreRightWrist>0.2)
    {
        if(rightWristY> 0 && rightWristY <= 100)
        {
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            AMA.rate(0.5);
            BSE.rate(0.5);
            WMYB.rate(0.5);
            OT.rate(0.5);
        }
        else if(rightWristY> 100 && rightWristY <= 200)
        {
            document.getElementById("speed").innerHTML = "Speed = 1x";
            AMA.rate(1);
            BSE.rate(1);
            WMYB.rate(1);
            OT.rate(1);
        }
        else if(rightWristY> 200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = "Speed = 1.5x";
            AMA.rate(1.5);
            BSE.rate(1.5);
            WMYB.rate(1.5);
            OT.rate(1.5);
        }
        else if(rightWristY> 300 && rightWristY <= 400)
        {
            document.getElementById("speed").innerHTML = "Speed = 2x";
            AMA.rate(2);
            BSE.rate(2);
            WMYB.rate(2);
            OT.rate(2);
        }
        else if(rightWristY> 400 && rightWristY <= 500)
        {
            document.getElementById("speed").innerHTML = "Speed = 2.5x";
            AMA.rate(2.5);
            BSE.rate(2.5);
            WMYB.rate(2.5);
            OT.rate(2.5);
        }

    }

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
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist+"scoreRightWrist="+scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY="+leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("righttWristX = "+ rightWristX + "rightWristY="+rightWristY);
    }
}