개인 블로그 이미지업로드를 위해서 s3에 이미지를 업로드 해야했다.

일단 aws의 s3는 simple storage service 의 준말로 간단한 저장소라는 의미, 근데 사용법은 간단치가..

내가 사용한 방법은 aws의 iam을 통해서 만들어 놓은 인증된 사용자의 정보로 로그인하여 해당 사용자가 가진 권한 정책에 따라 s3에 접근하여 이미지를 업로드할 url을 생성하여

해당 url로 이미지를 업로드하는 방식이다.

업로드는 iam의 사용자의 권한, 이미지를 가져와서 보여주는건 s3 버킷의 권한으로 세팅된다는 점을 기억하자.

플로우는

1. 서버에 쿼리스트링으로 파일명과 카테고리를 보낸다.
2. 서버는 파일명과 카텔고리를 가지고 이미지를 업로드할 url을 만들어서 리턴해준다.
3. 클라이언트는 리턴받은 url에 이미지를 PUT으로 보낸다.
4.

```
/// s3 접근할때 사용할 정보
  const config = {
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_ACCSES_PW,
    region: process.env.AWS_REGION,
    signatureVersion: 'v4'
  };
/// 서버측에 쿼리스트링으로 전달한 파일명과
  const filename = req.query.filename;
  const category = req.query.category;

  const time = Date.now();

  const uploadTitle = `${category}/${time}-${filename.replace(/\s/g, '-')}`;

  const s3 = new AWS.S3(config);

  const uploadUrl = await s3.getSignedUrlPromise('putObject', {
    Bucket: process.env.AWS_IMG_BUCKET,
    Key: uploadTitle,
    Expires: 60
  });

```
