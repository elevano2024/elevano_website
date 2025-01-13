import { ImageResponse } from "next/og";
// or if you're using edge runtime:
// import { ImageResponse } from '@vercel/og'

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4C42D9",
            color: "white",
          }}
        >
          <img src={`https://elevano.com/logo-white.svg`} alt="Elevano Logo" />
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              marginTop: 30,
              padding: "0 120px",
              textAlign: "center",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
