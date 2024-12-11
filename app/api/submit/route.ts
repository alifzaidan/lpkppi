import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

type SheetForm = {
    nama: string;
    nik: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: string;
    tempatTinggal: string;
    blk: string;
    email: string;
    pendidikan: string;
    tanggalUji: string;
    tujuan: string;
    namaPt: string;
    skema: string;
};

export const POST = async (req: NextRequest) => {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    const body = (await req.json()) as SheetForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:M1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        body.nama,
                        body.nik,
                        body.tempatLahir,
                        body.tanggalLahir,
                        body.jenisKelamin,
                        body.tempatTinggal,
                        body.blk,
                        body.email,
                        body.pendidikan,
                        body.tanggalUji,
                        body.tujuan,
                        body.namaPt,
                        body.skema,
                    ],
                ],
            },
        });

        return NextResponse.json({ data: response.data }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'Internal Server Error', e }, { status: 500 });
    }
};
